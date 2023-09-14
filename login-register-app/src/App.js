import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login'
import { Register } from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleform = (formName) => {
    setCurrentForm(formName);
  }

  const ClientRegister = (name, email, pass) => {
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        pass: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleform} /> : <Register onFormSwitch={toggleform} />
      }
    </div>
  );
}

export default App;
