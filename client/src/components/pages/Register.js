import { fetchData } from "../../main.js";
// import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  //   firstname: "",
  //   lastname: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   password2: ""
  // });

  const { firstname, lastname, username, email, password, password2 } = user;

  const onChange = (e) => updateUser(e.target.name, e.target.value );

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", user, "POST")
      .then((data) => {
        if (!data.message) {
          navigate("/profile");
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <body className="page3">
      <center>
        <form className="container" onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstname">Firstname</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="text"
                    placeholder="Enter FirstName"
                    name="firstname"
                    id="firstname"
                    onChange={onChange}
                    value={firstname}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastname">Lastname</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="text"
                    placeholder="Enter LastName"
                    name="lastname"
                    id="lastname"
                    onChange={onChange}
                    value={lastname}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="username">Username</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="text"
                    placeholder="Enter UserName"
                    name="username"
                    id="username"
                    onChange={onChange}
                    value={username}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "32px", padding: "2px" }}
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={onChange}
                    value={email}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={onChange}
                    value={password}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password2">Confirm Password</label>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="password"
                    id="password2"
                    placeholder="Enter password"
                    name="password2"
                    onChange={onChange}
                    value={password2}
                    required
                  />
                </td>
              </tr>
              <br></br>
        
              <tr>
                <td colSpan="3">
                  <button
                    style={{ marginLeft: "5px", padding: "2erm" }}
                    type="submit"
                    className="btn"
                  >
                    Register
                  </button>
                  <input
                    style={{ marginLeft: "10em", padding: "2erm" }}
                    type="reset" class="btn"
                    value="Cancel"
                  />
                </td>
              </tr>
             <br>
             </br>
              <tr>
  <td colSpan="3" style={{ textAlign: "center" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
      <span   className="txt1">Already have an account? </span>
      <span>
        <Link to="/login" className="txt3" style={{ marginLeft: "5px", padding: "2px" }}>Sign in</Link>
      </span>
    </div>
  </td>
</tr>
            </tbody>
          </table>
        </form>
      </center>
    </body>
  );
};

export default RegisterForm;
