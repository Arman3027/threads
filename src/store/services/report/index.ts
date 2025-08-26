import api from "../api";

import type { AddReportBodyType, CustomResponseType } from "@/types";

const reportApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addReport: builder.mutation<CustomResponseType<void>, AddReportBodyType>({
      query: (newReport) => ({
        url: "/reports",
        method: "post",
        body: newReport,
      }),
    }),
  }),
});

export default reportApi;
export const { useAddReportMutation } = reportApi;
