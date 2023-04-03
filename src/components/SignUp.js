import React, { useState } from "react";
// import LogoIcon from '../assets/png-transparent-gym-logo-fitness-removebg-preview';

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="banner">
      <div className="container">
        <div class="portfolio pdx">
          <div class="portfolio-description pd">
            <h2>Welcome! <span>To Our Site</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Valiptatum</p>
            <div class="portfolio-social-icons">
              <a href="facebook.com"><i class="bi bi-facebook"></i></a>
              <a href="linkin.com"><i class="bi bi-linkedin"></i></a>
              <a href="telegram.com"><i class="bi bi-telegram"></i></a>
              <a href="instagram.com"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="logine-form px">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className="input-box">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" id="username" placeholder="Username"
                  autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-box">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" placeholder="New Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password" />
              </div>
              <div className="input-box">
                {/* <label htmlFor="password">Password Confirmation</label> */}
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  id="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <button className="btnx" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
