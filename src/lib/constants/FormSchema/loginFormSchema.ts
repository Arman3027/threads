import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export type loginFormValues = z.infer<typeof loginFormSchema>;
