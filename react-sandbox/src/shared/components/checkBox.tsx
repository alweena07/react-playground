import type { CheckBoxProps } from "../types/types";

export const CheckBox = ({ checked, onChange, style }: CheckBoxProps) => {
  return (
    <input
      style={style}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}