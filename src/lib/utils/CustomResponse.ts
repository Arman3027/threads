import { NextResponse } from "next/server";

import type { CustomResponseType, CustomResponseOptionsType } from "@/types";

export const CustomResponse = <T>({
  statusCode = 200,
  body,
}: CustomResponseOptionsType<T>): NextResponse<CustomResponseType<T>> => {
  const ok: boolean = statusCode >= 200 && statusCode <= 299;

  return NextResponse.json(
    {
      ok,
      statusCode,
      body,
    },
    { status: statusCode }
  );
};
