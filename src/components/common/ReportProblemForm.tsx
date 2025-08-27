"use client";
import addReportSchema from "@/lib/constants/FormSchema/addRemoteSchema";
import { useAppDispatch } from "@/lib/hook";
import { exitReport } from "@/store/features/reportProblem/ReportProblemSlice";
import { useAddReportMutation } from "@/store/services/report";
import { CustomResponseType, SendReportInputType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const ReportProblemForm = () => {
  const dispatch = useAppDispatch();
  const [sendReport] = useAddReportMutation();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(addReportSchema),
  });
  const handleSendReport = async (data: SendReportInputType) => {
    try {
      const promise = sendReport(data).unwrap();

      toast.promise(promise, {
        loading: "wait...",
        success: <b>report was sended</b>,
        error: <b>something went wrong</b>,
      });

      await promise;
      dispatch(exitReport());
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const errorMessage =
          (error.data as CustomResponseType<void>).body.message ??
          "unknown error";
        toast.error(errorMessage);
      } else {
        toast.error("unknown error");
      }
    }
  };

  return (
    <form
      className="h-full w-full z-50"
      onSubmit={handleSubmit(handleSendReport)}
    >
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col">
          <textarea
            className="h-20 w-full resize-none text-gray-900 outline-none placeholder:text-gray-300 dark:text-gray-100 dark:placeholder:text-gray-700"
            placeholder="Please include as many details as possible..."
            {...register("message")}
          ></textarea>
          <div className="flex items-center justify-end pt-8">
            <button
              type="submit"
              className="w-fit cursor-pointer rounded-xl border border-gray-200 bg-transparent px-4 py-1.5 text-sm font-semibold text-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 dark:border-gray-800 dark:text-gray-200 dark:disabled:text-gray-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
