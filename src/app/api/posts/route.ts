import { addPost, getPosts } from "@/lib/services/posts";

import AppError from "@/lib/exception/AppError";

import HttpStatusCode from "@/lib/constants/HttpStatusCode";
import Messages from "@/lib/constants/Messages";

import type { NextRequest, NextResponse } from "next/server";
import type { PostsType, AddPostsBodyType, PostsOptionType } from "@/types";
import { CustomResponse } from "@/lib/utils/CustomResponse";
import { validateData } from "@/lib/utils/ValidateData";
import addPostSchema from "@/lib/constants/FormSchema/addPostSchema";
import postsQuerySchema from "@/lib/constants/FormSchema/postQuerySchema";
import { checkAuth } from "@/lib/guard/auth";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search") ?? undefined;
    const limit = Number(searchParams.get("limit")) || 10;
    const page = Number(searchParams.get("page")) || 1;

    const queries: PostsOptionType = { search, limit, page };

    validateData<PostsOptionType>(postsQuerySchema, queries);
    const { data, pagination } = await getPosts(queries);

    return CustomResponse<PostsType[]>({ body: { data, pagination } });
  } catch (error) {
    if (error instanceof AppError) {
      if (error.isOperational) {
        return CustomResponse({
          statusCode: error.statusCode,
          body: { message: error.message },
        });
      }
    }

    return CustomResponse({
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      body: { message: Messages.INTERNAL_SERVER },
    });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const user = await checkAuth(req);
    if (!user)
      throw new AppError(Messages.INVALID_TOKEN, HttpStatusCode.UNAUTHORIZED);

    const body: AddPostsBodyType = await req.json();

    validateData<AddPostsBodyType>(addPostSchema, body);
    await addPost({ ...body, author: user.id });

    return CustomResponse({
      statusCode: HttpStatusCode.CREATED,
      body: { message: Messages.POST_CREATED },
    });
  } catch (error) {
    if (error instanceof AppError) {
      if (error.isOperational) {
        return CustomResponse({
          statusCode: error.statusCode,
          body: { message: error.message },
        });
      }
    }

    return CustomResponse({
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      body: { message: Messages.INTERNAL_SERVER },
    });
  }
}
