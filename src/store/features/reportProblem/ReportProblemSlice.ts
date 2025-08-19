import { createSlice } from "@reduxjs/toolkit";
import type { reportProblemStateType } from "./type";

const initialState: reportProblemStateType = {
  isReportProblemActive: false,
};

const reportProblemSlice = createSlice({
  name: "reportProblem",
  initialState,
  reducers: {
    showReport: (state) => {
      state.isReportProblemActive = true;
    },
    exitReport: (state) => {
      state.isReportProblemActive = false;
    },
  },
});

export default reportProblemSlice;
export const { showReport, exitReport } = reportProblemSlice.actions;
