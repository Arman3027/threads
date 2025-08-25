import { supabase } from "../utils/db";

import type { AddRemportBodyType } from "@/types";

export const addReport = async (data: AddRemportBodyType): Promise<boolean> => {
  await supabase.from("reports").insert(data);
  return true;
};
