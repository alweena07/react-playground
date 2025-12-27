import type { InputBoxProps } from "../types/types";

export const InputBox = ({ placeholder, onChange, value, style }: InputBoxProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={style}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    />
  );
}