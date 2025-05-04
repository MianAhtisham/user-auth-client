import React, { useState } from "react";
import axios from "axios";
import "./todo.css";

const AddTodo = ({ fetchTodos }) => {
  const [task, setTask] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      try {
        await axios.post("http://localhost:8000/api/todo", { task }, { withCredentials: true });
        setTask("");
        fetchTodos();
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <form className="todo" onSubmit={addTodo}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Create a task"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
