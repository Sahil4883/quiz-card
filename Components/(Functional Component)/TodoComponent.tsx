"use client";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

interface Todo {
  id: number;
  question: string;
  answer: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    // Simulate fetching data from an API
    const initialTodos: Todo[] = [
      {
        id: 1,
        question: "What is React?",
        answer: "A JavaScript library for building user interfaces",
        completed: false,
      },
      {
        id: 2,
        question: "What is Tailwind CSS?",
        answer: "A utility-first CSS framework",
        completed: false,
      },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = () => {
    if (question.trim() && answer.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        question,
        answer,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setQuestion("");
      setAnswer("");
    }
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
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
          value={question}
          onChange={handleQuestionChange}
          onKeyPress={handleKeyPress}
          className="w-full p-2 border rounded shadow mb-2"
          placeholder="Question"
        />
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          onKeyPress={handleKeyPress}
          className="w-full p-2 border rounded shadow"
          placeholder="Answer"
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
            className="flex flex-col items-start justify-between p-2 border-b"
          >
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              <strong>Q:</strong> {todo.question}
            </span>
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              <strong>A:</strong> {todo.answer}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 mt-1"
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
