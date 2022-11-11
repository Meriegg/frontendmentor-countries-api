import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="px-10 py-2 bg-light-mode-element text-light-mode-text dark:text-dark-mode-text font-semibold rounded-md dark:bg-dark-mode-element shadow-md hover:shadow-xl"
    >
      {children}
    </button>
  );
};

export default Button;
