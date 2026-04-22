import type { ChangeEvent, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}
const TextInput = ({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required,
  inputMode,
  className = "",
  hasError = false,
  ...restProps
}: TextInputProps) => {
  const baseInputStyles = [
    "w-full",
    "mb-2",
    "bg-transparent",
    "border-0",
    "border-b-[2px]",
    hasError ? "border-red-500" : "border-grey-2",
    "text-base",
    "focus:outline-none",
    "focus:ring-0",
    className,
  ].join(" ");
  return (
    <div className="desktop-xl:mb-6">
      <label
        htmlFor={id}
        className="text-sm desktop-xl:text-xl phone-md:text-lg text-grey-3 "
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        className={baseInputStyles}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;
