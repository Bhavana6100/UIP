import { Outlet, Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        My Website
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              {/* Add more authenticated-only links here */}
            </>
          )}
        </ul>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
