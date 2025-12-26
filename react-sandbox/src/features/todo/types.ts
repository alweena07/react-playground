export interface ButtonProps {
  onClick: () => void;
  label: string;
}

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
export interface InputBoxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export interface DisplayListProps {
  todos: TodoItem[];
}