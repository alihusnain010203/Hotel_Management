import { useState } from "react";
import "./register.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [cardentials, Setcardentials] = useState({
    email:'',
    username: '',
    password: '',
    country:'',
    phone:null,
  });
  const [err,seterr]=useState({
    state:false,
    message:""
  })
  const navigate=useNavigate();
  const { user,loading, error, dispatch } = useContext(AuthContext);
const handleChange=(e)=>{
  Setcardentials({...cardentials,[e.target.name]: e.target.value})
}

async function handleClick(e){
  e.preventDefault();
  console.log("Clicked");
 dispatch({type:'LOGIN_START'});
 seterr({
  state:false
 })
try{
   
  let response= await axios.post('http://localhost:1800/authentication/register',cardentials);
console.log(response.data);
  dispatch({type:'LOGIN_SUCCESS',payload:response.data})
  console.log("Clicked");
  navigate("/login")
}
catch(err){
seterr({state:true,message:err.response.data.messege})
dispatch({type:'LOGIN_FAILURE',payload:err.response.data})
}
}
  return (
    <div className="login">
      <div className="lContainer">
      <input type="email"     onChange={handleChange} name="email" placeholder="Email" className="linput" />
        <input type="text"     onChange={handleChange} name="username" placeholder="username" className="linput" />
        <input type="password" onChange={handleChange} name="password" placeholder="password" className="linput" />
        <input type="text" onChange={handleChange} name="country" placeholder="country" className="linput" />
        <input type="number" onChange={handleChange} name="phone" placeholder="phone" className="linput" />
        <button  onClick={handleClick} className="lButton">Register</button>
        {err.state && <span style={{color:'red'}}>{err.message}</span>}
      </div>
    </div>
  );
};

export default Register;
