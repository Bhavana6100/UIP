import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <center>
    <form className="container"onSubmit={onSubmit}>
    <table>
      <div className="form-group">
        
       <tr><td> <label htmlFor="firstname">Firstname</label></td>
<td><input
          style={{ marginLeft: "10em", padding: "2erm" }}  type="text"  placeholder="Enter FirstName"  name="firstname"  id="firstname"
          onChange={onChange}  value={firstname} required />
     </td> </tr></div>
      <div className="form-group">
      <tr><td> <label htmlFor="lastname">Lastname</label></td>
       <td> <input
          style={{ marginLeft: "10em", padding: "2erm" }}  type="text"  placeholder="Enter LastName"  name="lastname"  id="lastname"
          onChange={onChange} value={lastname}  required /></td>
     </tr> </div>
      <div className="form-group">
      <tr><td> <label htmlFor="username">Username</label></td>
       <td> <input
          style={{ marginLeft: "10em", padding: "2erm" }} type="text" placeholder="Enter UserName" name="username"  id="username"
          onChange={onChange} value={username} required /></td></tr>
      </div>
      <div className="form-group">
      <tr><td>  <label htmlFor="email">Email</label></td>
       <td> <input
          style={{ marginLeft: "12em", padding: "2erm" }}  type="email"  id="email"  placeholder="Enter email"   name="email"
          onChange={onChange}  value={email}  required /></td></tr>
      </div>
      <div className="form-group">
      <tr><td>  <label htmlFor="password">Password</label></td>
    <td>    <input
          style={{ marginLeft: "10em", padding: "2erm" }} type="password"  id="password" placeholder="Enter password"  name="password"
          onChange={onChange}  value={password} required  /></td></tr>
      </div>
      <div className="form-group">
      <tr><td>   <label htmlFor="password2">Confirm Password</label></td>
        <td><input
          style={{ marginLeft: "6.5em", padding: "2erm" }} type="password"  id="password2" placeholder="Enter password"  name="password2"
          onChange={onChange}  value={password2} required  /></td></tr>
      </div>
<br></br>
<br></br>
    <tr><td>  <button style={{ marginLeft: "5em", padding: "2erm" }} type="submit" className="btn">
        Register
      </button></td>
      <td><input style={{ marginLeft: "0em",padding: "2erm" }} type="reset" value="Cancel" class="btn"/></td></tr>
<br></br>
      <tr><td>    <div>
                            <span class="txt1">
                                Already have an account?
                              </span>
                             <Link class="txt3" to="/login" style={{ marginLeft: "5em", padding: "2erm" }} >Sign in </Link>
                         </div></td></tr>
</table>

    </form>
    </center>
    
    </body>
    
  );
};

export default RegisterForm;