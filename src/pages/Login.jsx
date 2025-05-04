import React, { useState } from "react";
import "./app.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
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
      const response = await axios.post("http://localhost:8000/api/login", user, {
        withCredentials: true,
      });
      toast.success(response.data); 
      navigate("/Home");
    } catch (error) {
      console.log("Login error", error);
      toast.error(error.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Login</h3>
      <form className="addUserForm" onSubmit={submitForm}>
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
        <div className="inputGroup">
  <button type="submit" className="btn btn-primary mt-4 p-2">
    Login
  </button>
</div>
        </div>
      </form>
      <div className="singup mt-4">
        Don`t have an account?{" "}
        <Link to="/" className="btn btn-secondary ms-2">
          Singup
        </Link>
      </div>
    </div>
  );
};

export default Login;
