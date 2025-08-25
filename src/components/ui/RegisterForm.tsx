"use client";
import { AuthorizationAsk } from "@/components/common/AuthorizationAsk";
import { CustomForm } from "@/components/common/CustomForm";
import { Input } from "@/components/common/Input";
import { SubmitButton } from "@/components/common/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormSchema,
  registerFormValues,
} from "@/lib/constants/FormSchema/registerFormSchema";
import RegisterFields from "@/lib/constants/Fields/RegisterFields";
import { useRegisterMutation } from "@/store/services/auth";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const [sendNewUser, { isLoading }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const onsubmit = (data: registerFormValues) => {
    const res = sendNewUser(data);
    toast.promise(res, {
      loading: "wait...",
      success: <b>register is successful</b>,
      error: <b>somthing went wrong</b>,
    });
  };
  return (
    <CustomForm title="Register" onSubmit={handleSubmit(onsubmit)}>
      {RegisterFields.map((field) => {
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
      <SubmitButton>Register</SubmitButton>
      <AuthorizationAsk
        href="/login"
        name="login"
        title="Do you have an account?"
      />
    </CustomForm>
  );
};
