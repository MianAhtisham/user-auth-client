import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import TodoList from "../components/TodoList"
import "./app.css"

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true });
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
          </button>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
