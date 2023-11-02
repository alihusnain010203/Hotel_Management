import { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [cardentials, Setcardentials] = useState({
    username: '',
    password: '',
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
 dispatch({type:'LOGIN_START'});
 seterr({
  state:false
 })
try{
  let response= await axios.post('http://localhost:1800/authentication/login',{username:cardentials.username,password:cardentials.password})
  dispatch({type:'LOGIN_SUCCESS',payload:response.data.details})
  navigate("/")
}
catch(error){
seterr({state:true,message:error.response.data.messege})
dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
}
}
  return (
    <div className="login">
      <div className="lContainer">
        <input type=".text"     onChange={handleChange} name="username" placeholder="username" className="linput" />
        <input type="password" onChange={handleChange} name="password" placeholder="password" className="linput" />
        <button  onClick={handleClick} className="lButton">Login</button>
        {err.state && <span style={{color:'red'}}>{err.message}</span>}
      </div>
    </div>
  );
};

export default Login;
