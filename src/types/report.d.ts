export interface ReportType {
  id: string;
  message: string;
}

export type AddReportBodyType = Omit<ReportType, "id">;

export type SendReportInputType = {
  message: string;
};
