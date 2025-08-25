import { StatusCode } from "@/types/types";

class AppError extends Error {
  constructor(
    message: string,
    public statusCode: StatusCode = 500,
    readonly isOperational: boolean = true
  ) {
    super(message);
  }
}

export default AppError;
