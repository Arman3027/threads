import Link from "next/link";
import type { AuthorizationAskProps } from "./type";

export const AuthorizationAsk = ({
  title,
  href,
  name,
}: AuthorizationAskProps) => {
  return (
    <p className="text-center cursor-default text-sm text-gray-800 dark:text-gray-200">
      {title}{" "}
      <Link href={href} className="font-semibold cursor-pointer">
        {name}
      </Link>
    </p>
  );
};
