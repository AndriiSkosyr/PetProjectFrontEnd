import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    ClientRegister(name, email, password)
    //setName("")
    //setEmail("")
    //setPassword("")
  }

  const ClientRegister = async (name, email, password) => {
    await fetch("http://127.0.0.1:5000/client", {
      method: "POST",
      body: JSON.stringify({
        clientName: name,
        clientEmail: email,
        clientPassword: password,
        clientId: Math.floor(Math.random() * 10)
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
    <div className="auth-from-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" id="name" name="name"></input>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
    </div>
  )

};
