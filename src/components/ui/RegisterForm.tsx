"use client";
import { AuthorizationAsk } from "@/components/common/AuthorizationAsk";
import { CustomForm } from "@/components/common/CustomForm";
import { Input } from "@/components/common/Input";
import { SubmitButton } from "@/components/common/SubmitButton";
import RegisterFields from "@/lib/constants/Fields/RegisterFields";

export const RegisterForm = () => {
  return (
    <CustomForm
      title="Register"
      onSubmit={() => {
        console.log("object");
      }}
    >
      {RegisterFields.map((field) => {
        return (
          <Input
            id={field.id}
            placeholder={field.placeholder}
            title={field.title}
            type={field.type}
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
