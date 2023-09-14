import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    props.Register(name, email, pass)
    setName("")
    setEmail("")
    setPass("")
  }

  return (
    <div className="auth-from-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">FullName</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="yourname" id="name" name="name"></input>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
    </div>
  )

};
