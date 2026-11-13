import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  variant = "tailwind",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "tailwind" | "bootstrap";
}) => {
  const variantClass = {
    tailwind: `transition-all rounded-lg cursor-pointer text-lg px-3 py-2 bg-primary hover:bg-primary/90 text-white`,
    bootstrap: `btn btn-primary fs-6 px-3 py-2 rounded rounded-3`,
  };
  return (
    <button
      {...props}
      className={`${variantClass[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
