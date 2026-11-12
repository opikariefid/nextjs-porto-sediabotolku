import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`transition-all rounded-lg cursor-pointer text-lg px-3 py-2 bg-primary hover:bg-primary/90 text-white ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
