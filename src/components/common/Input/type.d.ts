import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  errorMessage?: string;
}
