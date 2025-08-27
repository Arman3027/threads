export interface UserType {
  id: string;
  full_name: string;
  email: string;
  password: string;
  joined_at: string;
}

export interface RegisterBodyType extends Omit<UserType, "id" | "joined_at"> {
  confirm_password: string;
}

export type LoginBodyType = Pick<UserType, "email" | "password">;
