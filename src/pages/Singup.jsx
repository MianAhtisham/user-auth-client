import React, { useState } from "react";
import "./app.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Singup = () => {
  const initialUser = {
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register", user, {
        withCredentials: true,

      });
      toast.success(response.data);
      navigate("/login");  
    } catch (error) {
      console.log("Error while submitting form:", error);
      toast.error(error.response?.data || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="addUser">
      <h3>Signup</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={inputHandler}
            id="name"
            name="name"
            value={user.name}
            autoComplete="off"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={inputHandler}
            id="email"
            name="email"
            value={user.email}
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={inputHandler}
            id="password"
            name="password"
            value={user.password}
            autoComplete="off"
            placeholder="Enter your Password"
            required
          />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary mt-4 p-2">
            Signup
          </button>
        </div>
      </form>

      <div className="singup mt-3">
        Already have an account?{" "}
        <Link to="/login" className="btn btn-secondary ms-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Singup;
