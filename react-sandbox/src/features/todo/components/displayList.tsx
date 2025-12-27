import type { DisplayListProps } from "../types";

export const DisplayList = ({ todos }: DisplayListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? "(Completed)" : "(Pending)"}
        </li>
      ))}
    </ul>
  );
}