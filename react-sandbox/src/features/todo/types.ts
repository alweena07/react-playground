export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface DisplayListProps {
  todos: TodoItem[];
  onChange: (id: number, checked: boolean) => void;
  onDelete: (id: number) => void;
}