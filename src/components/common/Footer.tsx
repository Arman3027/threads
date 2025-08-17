import { useAppDispatch } from "@/lib/hook";
import { showReport } from "@/store/features/reportProblem/ReportProblemSlice";

export const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-3 w-full justify-center m-0.5">
      <p className="text-gray-400 dark:text-gray-600 text-sm">&copy; 2025</p>
      <button
        onClick={() => {
          dispatch(showReport());
        }}
        className="cursor-pointer text-gray-400 dark:text-gray-600 text-sm"
      >
        report a problem
      </button>
    </div>
  );
};
