export interface ButtonProps {
  onClick: () => void;
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface InputBoxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  value?: string;
  type?:string
}

export interface CheckBoxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}