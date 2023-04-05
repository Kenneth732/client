import React, { useState } from "react";
import './LogIn.css'

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
      fetch("https://serenity-strengths.onrender.com/login", {
//     fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          placeholder="Enter Email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
