import type { ButtonProps } from "../types";

export const Button = ({ onClick, label }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>
}