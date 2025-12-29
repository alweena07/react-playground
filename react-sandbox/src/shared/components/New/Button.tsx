import type { ButtonProps } from "../types/types";

export const Button = ({ onClick, label, children, style }: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
    >
      {label}{children}
    </button>
  );
}