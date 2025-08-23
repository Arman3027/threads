import { FieldsType } from "./type";
import { RegisterBodyType } from "@/types";

const RegisterFields: FieldsType<RegisterBodyType>[] = [
  {
    title: "Full Name",
    id: "fullName",
    registerType: "full_name",
    type: "text",
    placeholder: "Enter your full name...",
  },
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
  {
    title: "Confirm Password",
    id: "confirmPassword",
    registerType: "confirm_password",
    type: "password",
    placeholder: "Enter your confirm password...",
  },
];

export default RegisterFields;
