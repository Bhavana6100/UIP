
import './App.css';
// import Books from "./components/Books.js";
// import About from "./components/About.js";
import Navbar from './components/Navbar.js';
import Register from './components/Register.js';
import Login from "./components/Login.js";

// const books = [
//   {
//       id:3456,
//       title :"This site helps you with new friends"
//   },
//   {
//       id:51531,
//       title :"Helps you with new posts"
//   },
//   {
//       id:3456,
//       title :"Helps you with the new trends"
//   },
// ]

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to world of Social Media site!!</h1>     
     {/* <Books books={books}/> */}
      {/* <About/> */}
  
     <Register/>
     <Login/>
    </div>
  );
}

export default App;
