import { getUserById } from "@/lib/services/users";

import type { NextRequest } from "next/server";
import type { UserType } from "@/types";

export async function checkAuth(req: NextRequest): Promise<UserType | false> {
  try {
    const headers = req.headers;
    const authorization = headers.get("Authorization");
    if (!authorization) return false;

    const [authType, authToken] = authorization.split(" ");
    if (authType !== "Bearer") return false;

    const user = await getUserById(authToken);

    return user;
  } catch {
    return false;
  }
}
