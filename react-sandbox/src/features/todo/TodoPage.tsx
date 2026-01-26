import { useState } from 'react';
import { Button } from '@/shared/components/Button';
import { InputBox } from '@/shared/components/InputField/InputBox';
import type { TodoItem } from './types';
import { DisplayList } from './components/displayList';
import './styles.css';

export const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = () => {
        const newTodo: TodoItem = {
            id: todos.length + 1,
            text: inputValue,
            completed: false,
        };
        setInputValue('');
        setTodos([...todos, newTodo]);
    };

    const changeStatus = (id: number, checked: boolean) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: checked } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div className="add-todo-container">
                <InputBox placeholder="Enter a new todo" onChange={setInputValue} value={inputValue} />
                <Button onClick={() => addTodo()} label="Add Todo" />
            </div>
            <DisplayList todos={todos} onChange={changeStatus} onDelete={deleteTodo} />
        </div>
    );
};
