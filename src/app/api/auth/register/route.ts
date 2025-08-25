import { addUser } from "@/lib/services/users";

import AppError from "@/lib/exception/AppError";

import { registerFormSchema } from "@/lib/constants/FormSchema/registerFormSchema";

import HttpStatusCode from "@/lib/constants/HttpStatusCode";
import Messages from "@/lib/constants/Messages";

import type { NextRequest, NextResponse } from "next/server";
import type { RegisterBodyType } from "@/types";
import { CustomResponse } from "@/lib/utils/CustomResponse";
import { validateData } from "@/lib/utils/ValidateData";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RegisterBodyType = await req.json();

    validateData<RegisterBodyType>(registerFormSchema, body);
    await addUser({
      full_name: body.full_name,
      email: body.email,
      password: body.confirm_password,
    });

    return CustomResponse({
      statusCode: HttpStatusCode.CREATED,
      body: { message: Messages.REGISTER_SUCCESS },
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
