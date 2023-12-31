import React,{useState} from 'react'
import logo from "../img/logo.png"
import '../css/SignUp.css';
import {Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignUp() {
     const navigate=useNavigate();
     const [name,setName]=useState("");
     const [email,setEmail]=useState("");
     const [userName,setUserName]=useState("");
     const [password,setPassword]=useState("");

     //Toast functions
     const notifyA=(msg)=>toast.error(msg);
     const notifyB=(msg)=>toast.success(msg);


     const postData=()=>{
          fetch("http://localhost:5000/signup",{
               method:"post",
               headers:{
                    "Content-Type":"application/json"
               },
               body:JSON.stringify({
                    name:name,
                    userName:userName,
                    email:email,
                    password:password

               })
               //key value no deni pdegi jb server pr bhejinge
          }).then(res=>res.json())
          .then(data=>{
               if(data.error){
                    const s=data.error;
                    s.forEach(element => {
                        notifyA(element.msg);
                    });
               }
               else{
                    notifyB(data.message);
                    navigate("/signin");
               }
               console.log(data)
          })
     }


     return (
          <div className='signUp'>
               <div className='form-container'>
                    <div className="form">
                         <img className="signUpLogo" src={logo} alt="logo" />
                         <p className='loginpara'>
                              Sign up to see photos and videos<br /> from your friends
                         </p>
                         <div>
                              <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                         </div>
                         <div>
                              <input type="text" name="name" id="name" placeholder='Full name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                         </div>
                         <div>
                              <input type="text" name="username" id="username" placeholder='Username' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                         </div>
                         <div>
                              <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                         </div>
                         <p className='loginpara' style={{fontSize:"12px",margin:"10px 0px"}}>
                              By signing up,you agree to out Terms,<br />privacy policy and cookies policy
                         </p>
                         <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>{
                              postData()
                         }}/>
                    </div>
                    <div className="form2">
                         Already have an account ? 
                         <Link to="/signin">
                            <span style={{color:"blue",cursor:"pointer"}}> SignIn</span>
                         </Link>
                    </div>

               </div>
          </div>
     )
}
