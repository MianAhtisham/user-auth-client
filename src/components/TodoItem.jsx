import React from "react";
import axios from "axios";
import "./todo.css"

const TodoItem = ({ todo, fetchTodos }) => {
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/todo/${todo._id}`, { withCredentials: true });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="todo-item">
    <span>{todo.task}</span>
    <button onClick={deleteTodo} className="btn btn-danger">
      <i className="bi bi-trash-fill"></i>
    </button>
  </div>
  );
};

export default TodoItem;
