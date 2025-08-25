import {
  CustomResponseType,
  LoginBodyType,
  RegisterBodyType,
  UserType,
} from "@/types";
import api from "../api";

const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<CustomResponseType<void>, RegisterBodyType>({
      query: (newUser) => ({
        url: "/auth/register",
        method: "post",
        body: newUser,
      }),
    }),
    login: builder.mutation<
      CustomResponseType<Pick<UserType, "id">>,
      LoginBodyType
    >({
      query: (newUser) => ({
        url: "/auth/login",
        method: "post",
        body: newUser,
      }),
    }),
  }),
});

export default auth;
export const { useRegisterMutation, useLoginMutation } = auth;
