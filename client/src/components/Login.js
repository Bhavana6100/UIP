const LoginForm = () => {
    return (
      <form className="container">
        <div className="form-group" >
          <label htmlFor="email">Email</label>
          <input style={{marginLeft:10 +'em',padding:"2erm"}} type="email"  id="email" placeholder="Enter email/username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input style={{marginLeft:8 +'em',padding:"2erm"}} type="password"  id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
  
  export default LoginForm;