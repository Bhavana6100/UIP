

import React, { useState } from 'react';
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/login", user,"POST")
      .then((data) => {
        if (!data.message) {
          navigate("/profile", { state: { username: user.username } });
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <body className="page2">
      <center>
        <div className="login-page">
          <form className="container1" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input
                style={{ marginLeft: 10 + "em", padding: "2erm" }}
                type="text"
                id="username"
                name="username"
                onChange={onChange}
                value={username}
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                style={{ marginLeft: 10.3 + "em", padding: "2erm" }}
                type="password"
                id="password"
                name="password"
                onChange={onChange}
                value={password}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </center>
    </body>
  );
};

export default LoginForm;
