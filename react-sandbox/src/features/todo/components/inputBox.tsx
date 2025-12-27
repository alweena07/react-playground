import type { InputBoxProps } from "../types";

export const InputBox = ({ placeholder, onChange, value }: InputBoxProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    />
  );
}