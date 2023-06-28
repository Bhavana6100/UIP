const LoginForm = () => {
    return (
      <form className="container">
        <div className="form-group" >
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email/username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
  
  export default LoginForm;