"use client";
import React, { useState, ChangeEvent, FC } from "react";

const TodoList: FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  };

  const addTask = (): void => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index: number): void => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
      className="container mt-5"
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task"
              value={newTask}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" type="button" onClick={addTask}>
              Add
            </button>
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{task}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
