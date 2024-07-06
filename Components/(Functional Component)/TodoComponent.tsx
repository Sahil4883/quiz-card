"use client";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    // Simulate fetching data from an API
    const initialTodos: Todo[] = [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Learn Tailwind CSS", completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full p-2 border rounded shadow"
          placeholder="Add a new to-do..."
        />
        <button
          onClick={addTodo}
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded shadow"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
