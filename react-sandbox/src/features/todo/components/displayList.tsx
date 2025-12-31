import { Button } from "@/shared/components/Button";
import { CheckBox } from "@/shared/components/CheckBox";
import type { DisplayListProps } from "../types";
import { MdDelete } from "react-icons/md";

export const DisplayList = ({ todos, onChange, onDelete }: DisplayListProps) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div className="todo-left">
            <CheckBox
              checked={todo.completed}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(todo.id, e.target.checked)
              }
            />
            <span
              className="todo-text"
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
          </div>

          <div className="todo-actions">
            <Button style={{ backgroundColor: "transparent", border: "none", marginTop: "0.2rem" }} onClick={() => onDelete(todo.id)}>
              <MdDelete size={20} color="red" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
