"use client";
import { useForm } from "react-hook-form";
import { CustomForm } from "../common/CustomForm";
import { SubmitButton } from "../common";
import { zodResolver } from "@hookform/resolvers/zod";
import addPostSchema from "@/lib/constants/FormSchema/addPostSchema";
import { useRouter } from "next/navigation";
import { useAddPostMutation } from "@/store/services/posts";
import { AddPostsInputType } from "@/types";
import toast from "react-hot-toast";
import { getNowFormatted } from "@/lib/utils";

export const SendPost = () => {
  const [addPost] = useAddPostMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(addPostSchema) });

  const newPostHandler = async (data: AddPostsInputType) => {
    const now = getNowFormatted();
    try {
      const fullData = { content: data.content, created_at: now };
      const promise = addPost(fullData).unwrap();
      toast.promise(promise, {
        loading: "sending...",
        success: <b>sended</b>,
        error: <b>somthing went wrong</b>,
      });
      const res = await promise;
      router.push("/");
    } catch (err) {
      toast.error(
        "faild to send post :" + (err as any).data.body.message ||
          "Unknown error"
      );
    }
  };
  return (
    <CustomForm title="New Post" onSubmit={handleSubmit(newPostHandler)}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="content"
          className="text-base font-semibold text-gray-800 dark:text-gray-200"
        >
          Content
        </label>
        <textarea
          className="h-52 resize-none rounded-xl border border-gray-200 px-4 py-2 text-base font-medium text-gray-900 outline-none placeholder:text-gray-300 dark:border-gray-800 dark:text-gray-100 dark:placeholder:text-gray-700"
          placeholder="Enter post content..."
          id="content"
          {...register("content")}
        ></textarea>
        {errors.content?.message && (
          <p className="text-sm font-medium text-red-500">
            {errors.content.message}
          </p>
        )}
      </div>
      <SubmitButton>Publish</SubmitButton>
    </CustomForm>
  );
};
