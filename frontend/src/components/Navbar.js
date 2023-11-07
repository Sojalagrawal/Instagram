import React,{useContext} from 'react'
import logo from "../img/logo.png"
import "./Navbar.css"
import {Link} from "react-router-dom"
import { LoginContext } from './context/LoginContext'



export default function Navbar({login}) {
  const {setModalOpen}=useContext(LoginContext);
  
  const loginStatus=()=>{
    const token=localStorage.getItem("jwt");
    if(token || login){
      return[
        <>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/createPost">Create Post</Link></li>
          <li style={{marginLeft:"20px"}}><Link to="/followingpost">Home</Link></li>
          <li><Link to={""}><button className='primaryBtn' onClick={()=>setModalOpen(true)}>LogOut</button></Link></li>

        </>
      ]
    }
    else{
        return [
          <>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
          </>
        ]
    }
  };
  loginStatus();
  return (
    <div className="navbar">
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
            {/* <li><a href="/signup">SignUp</a></li>
            <li><a href="/signin">SignIn</a></li> */}
            {/* <li><a href="/profile">Profile</a></li> */}

            {loginStatus()}
            



        </ul>
    </div>
  )
}
