import { supabase } from "../utils/db";

import type { AddReportBodyType } from "@/types";

export const addReport = async (data: AddReportBodyType): Promise<boolean> => {
  await supabase.from("reports").insert(data);
  return true;
};
