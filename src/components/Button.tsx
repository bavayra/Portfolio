import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  active?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  disabled,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-sm transform transition-all duration-300 drop-shadow-md px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-grey-dark text-white hover:bg-grey-extra-dark hover:scale-105 focus:ring-accent-red active:bg-grey-extra-dark",
    secondary:
      "bg-accent-red text-white hover:bg-grey-dark hover:scale-105 focus:ring-accent-red active:bg-grey-dark",
  };
  const sizeStyles: Record<ButtonSize, string> = {
    small: "px-3 py-2 text-xs font-medium",
    medium: "px-4 py-2 text-base ",
    large: "px-4 py-1 text-lg",
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
