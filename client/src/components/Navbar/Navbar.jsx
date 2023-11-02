import { useContext } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext.jsx'
const Navbar = () => {
  const navigate=useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
navigate(`/login`);
  }
  const handleClick1=(e)=>{
    e.preventDefault();
navigate(`/register`);
  }
  const {user}=useContext(AuthContext)
  return (
    <div className="navbarContainer">
      <div className="navbar">
      <Link to='/'><div className="logo">ReservaPro</div></Link>
       <div className="button-Navbar">
          {
            user?<span style={{color:'white',padding:'5px'}}>{user.other.username}</span>:<>
            <button className="btn" onClick={handleClick1}>Register</button>
          <button className="btn" onClick={handleClick} >Login</button></>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
