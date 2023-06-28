const RegisterForm = () => {
    return (
      <form className="container">
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" className="form-control" id="firstname" placeholder="Enter Firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" className="form-control" id="lastname" placeholder="Enter Lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
  
  export default RegisterForm;