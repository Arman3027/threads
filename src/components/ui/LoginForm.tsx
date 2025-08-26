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
import { useLoginMutation } from "@/store/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "@/store/features/isAuthenticated/AuthenticatedSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [IsLogin] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onsubmit = async (data: loginFormValues) => {
    try {
      const promise = IsLogin(data).unwrap();
      toast.promise(promise, {
        loading: "wait...",
        success: <b>login is successful</b>,
        error: <b>something went wrong</b>,
      });
      const res = await promise;
      console.log(res);
      localStorage.setItem("id", res.body.data?.id as string);
      dispatch(setIsAuthenticated(true));
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error(
        "login failed: " + (err as any).data.body.message || "Unknown error"
      );
    }
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
