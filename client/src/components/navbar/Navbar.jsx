import { useContext } from "react";
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const Navbar = () => {
  const { user ,loading, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClickLogout=async (req,res,next) => {
      
      dispatch({ type: "LOGOUT" });
      try {
            await axios.post("/auth/logout");
        
        navigate("/")
      } catch (err) {
        next(err);
      }
    };

  
   
  



  return (
    <div className="navbar">
      <div className="navContainer">
     <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">ENIM CAMPUS</span>
        </Link>
        {user ?(<><div>{user.username} <button onClick={handleClickLogout} className="navButton">Logout</button> </div></>) :  (<div className="navItems">
          <button className="navButton" onClick={()=>(navigate("/register"))}>Register</button>
          <button className="navButton" onClick={()=>(navigate("/login"))}>Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar