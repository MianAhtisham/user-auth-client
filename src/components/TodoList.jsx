import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import "./todo.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/todos", {
        withCredentials: true,
      });
      setTodos(res.data);
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h2>Create your task</h2>
      <AddTodo fetchTodos={fetchTodos} />
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
        ))
      )}
    </div>
  );
};

export default TodoList;
