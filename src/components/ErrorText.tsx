import { PropsWithChildren } from "react";

const ErrorText = ({ children }: PropsWithChildren) => {
  return <p className="text-red-500 py-2 text-sm">{children}</p>;
};

export default ErrorText;
