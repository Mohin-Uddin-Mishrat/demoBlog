import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordError, setPasswordError] = useState();
  const [emailError, setemailError] = useState();
  const from = location.state?.from?.pathname || "/";
  const user = {
    email: "mishrat@gmail.com",
    password: "12345678",
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email == data.email && user.password == data.password) {
      localStorage.setItem("Authentication", true);
      navigate(from, { replace: true });
    } else if (user.email == data.email) {
      setPasswordError("Password is incorrect");
    } else if (user.password == data.password) {
      setemailError("Email Not Found");
    } else {
      setPasswordError("Password is incorrect");
      setemailError("Email Not Found");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-blue-50 rounded-lg py-7 px-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="text-2xl font-semibold text-slate-500">Login</h1>
          <input
            className="w-full py-2 pl-5 rounded-sm"
            type="email"
            placeholder="mishrat@gmail.com"
            name="email"
            onChange={handleChange}
          ></input>

          <input
            className="w-full py-2 pl-5 rounded-sm"
            type="password"
            placeholder="12345678"
            name="password"
            onChange={handleChange}
          ></input>
          <button className="w-full py-2 pl-5 rounded-full bg-blue-400" >Submit </button>
        </form>
      </div>
    </div>
  );
};
