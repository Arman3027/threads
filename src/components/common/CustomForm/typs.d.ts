import { FormEventHandler, ReactNode } from "react";

export interface CustomFormProps {
  title: string;
  onSubmit?: FormEventHandler;
  children?: ReactNode;
}
