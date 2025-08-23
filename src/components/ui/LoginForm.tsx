"use client";
import { AuthorizationAsk } from "@/components/common/AuthorizationAsk";
import { CustomForm } from "@/components/common/CustomForm";
import { Input } from "@/components/common/Input";
import { SubmitButton } from "@/components/common/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginFormSchema,
  loginFormValues,
} from "@/lib/constants/FormSchema/loginFormSchema";
import LoginFields from "@/lib/constants/Fields/LoginFields";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onsubmit = (data: loginFormValues) => {
    console.log(data);
  };
  return (
    <CustomForm title="Login" onSubmit={handleSubmit(onsubmit)}>
      {LoginFields.map((field) => {
        return (
          <Input
            key={field.id}
            id={field.id}
            placeholder={field.placeholder}
            title={field.title}
            type={field.type}
            errorMessage={errors[field.registerType]?.message}
            {...register(field.registerType)}
          />
        );
      })}
      <SubmitButton>Login</SubmitButton>
      <AuthorizationAsk
        href="/register"
        name="register"
        title="Do you have an account?"
      />
    </CustomForm>
  );
};
