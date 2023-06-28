const Navbar = () => {
      
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        My Website
      </a>
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
          <li className="nav-item">
            <a className="nav-link" href="/">Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
  }
  
  export default Navbar;





// const Navbar = () => {
      
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Social Media</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav">
            
//               <li className="nav-item">
//                 <Link className="nav-link" to="/register">Register</Link>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="#">Features</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Pricing</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" href="#">Disabled</a>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </nav>
//     );
//   }
  
//   export default Navbar;





