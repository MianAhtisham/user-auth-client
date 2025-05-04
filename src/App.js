import React from "react";
import "./App.css";
import Login from "./pages/Login"
import Singup from "./pages/Singup"
import Home from "./pages/Home";
import AddTodo from "./components/AddTodo"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Singup />, 
    },
    {
      path: "/login",
      element: <Login />,  
    },
    {
  path: "/home",
  element: <Home />
    },
    {
  path: "/addTodo",
  element: <AddTodo />
    },
    {
  path: "/todoItem",
  element: <TodoList />
    },
    {
  path: "/todoItem",
  element: <TodoItem />
    },
  ]);

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={route} />
      
    </div>
  );
}

export default App;
