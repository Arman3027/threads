import type { FieldsType } from "./type";
import type { LoginBodyType } from "@/types";

const LoginFields: FieldsType<LoginBodyType>[] = [
  {
    title: "Email",
    id: "email",
    registerType: "email",
    type: "text",
    placeholder: "Enter your email...",
  },
  {
    title: "Password",
    id: "password",
    registerType: "password",
    type: "password",
    placeholder: "Enter your password...",
  },
];

export default LoginFields;
