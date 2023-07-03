import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate= useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password2:""
  });

  const { firstname, lastname, username, email, password,password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    
    fetchData("/user/register", user,"POST")
    .then((data) => {
      if(!data.message) {
             navigate("/profile")
        console.log(data)
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

  return (
    <body class="page3">
    <form className="container"onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">Firstname</label>
        <input
          style={{ marginLeft: "10em", padding: "2erm" }}  type="text"  placeholder="Enter FirstName"  name="firstname"  id="firstname"
          onChange={onChange}  value={firstname} required />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Lastname</label>
        <input
          style={{ marginLeft: "10em", padding: "2erm" }}  type="text"  placeholder="Enter LastName"  name="lastname"  id="lastname"
          onChange={onChange} value={lastname}  required />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          style={{ marginLeft: "10em", padding: "2erm" }} type="text" placeholder="Enter UserName" name="username"  id="username"
          onChange={onChange} value={username} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          style={{ marginLeft: "12.3em", padding: "2erm" }}  type="email"  id="email"  placeholder="Enter email"   name="email"
          onChange={onChange}  value={email}  required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          style={{ marginLeft: "10em", padding: "2erm" }} type="password"  id="password" placeholder="Enter password"  name="password"
          onChange={onChange}  value={password} required  />
      </div>
      <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <input
          style={{ marginLeft: "6.5em", padding: "2erm" }} type="password"  id="password2" placeholder="Enter password"  name="password2"
          onChange={onChange}  value={password2} required  />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
    </body>
  );
};

export default RegisterForm;