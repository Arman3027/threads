"use client";
import { AuthorizationAsk } from "@/components/common/AuthorizationAsk";
import { CustomForm } from "@/components/common/CustomForm";
import { Input } from "@/components/common/Input";
import { SubmitButton } from "@/components/common/SubmitButton";
import LoginFields from "@/lib/constants/Fields/LoginFields";

export const LoginForm = () => {
  return (
    <CustomForm
      title="Login"
      onSubmit={() => {
        console.log("object");
      }}
    >
      {LoginFields.map((field) => {
        return (
          <Input
            id={field.id}
            placeholder={field.placeholder}
            title={field.title}
            type={field.type}
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
