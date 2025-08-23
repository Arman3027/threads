import { z } from "zod";

export const registerFormSchema = z
  .object({
    full_name: z
      .string()
      .min(4, "fullName must be at least 3 characters")
      .max(60),
    email: z.email(),
    password: z.string().min(4, "Password must be at least 4 characters"),
    confirm_password: z
      .string()
      .min(4, "Password must be at least 4 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Confirm password not match with password.",
    path: ["confirm_password"],
  });

export type registerFormValues = z.infer<typeof registerFormSchema>;
