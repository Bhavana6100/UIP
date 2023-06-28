const RegisterForm = () => {
    return (
      <form className="container">
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input style={{marginLeft:10 +'em',padding:"2erm"}} type="text" placeholder="Enter FirstName" name="firstname" id="firstname" required/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input style={{marginLeft:10 +'em',padding:"2erm"}} type="text" placeholder="Enter LastName" name="lastname" id="lastname" required/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
        {/* <input type="text" className="form-control" id="username" placeholder="Enter username" /> */}
          <input style={{marginLeft:10 +'em',padding:"2erm"}} type="text" placeholder="Enter UserName" name="username" id="username" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input style={{marginLeft:12.3 +'em',padding:"2erm"}} type="email"  id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input style={{marginLeft:10 +'em',padding:"2erm"}} type="password"  id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
  
  export default RegisterForm;