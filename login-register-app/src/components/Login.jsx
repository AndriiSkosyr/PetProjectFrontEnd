import React, { useState } from "react";

export const Login = (props) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    ClientLogin(name, password)
  }

  const ClientLogin = async (name, password) => {
    await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify({
        clientName: name,
        clientPassword: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Email</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" id="name" name="name" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
    </div>
  )
};
