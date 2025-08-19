"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { exitReport } from "@/store/features/reportProblem/ReportProblemSlice";
import { RefObject, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ReportProblemForm } from "@/components/common";

export const ReportProblem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { isReportProblemActive } = useAppSelector((state) => {
    return state.reportProblem;
  });
  useOnClickOutside(ref as RefObject<HTMLDivElement>, () => {
    dispatch(exitReport());
  });
  return (
    isReportProblemActive && (
      <div className="absolute top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-center items-center">
        <div
          ref={ref}
          className="flex flex-col justify-center items-center gap-2 h-60 w-96"
        >
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Report a Problem
          </p>
          <ReportProblemForm />
        </div>
      </div>
    )
  );
};
