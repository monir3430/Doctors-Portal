
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/home" element = {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/appointment" element = {<RequiredAuth>
          <Appointment></Appointment>
        </RequiredAuth>}></Route>
        <Route path = "/login" element = {<Login></Login>}></Route>
        <Route path = "/signup" element = {<Signup></Signup>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
