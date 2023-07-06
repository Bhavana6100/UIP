
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About.js";
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js';
import Login from "./components/pages/Login.js";
import Profile from "./components/pages/Profile";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navbar />}>
              <Route index element={<About />}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register />}/>
              <Route path="profile" element={<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
