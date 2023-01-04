import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"


function Login() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate= useNavigate();
    const data=[
    {
        userName:"manoj123@gmail.com",
        password:"Breeze@456"
    },
    {
        userName:"bharath123@gmail.com",
        password:"Breeze@789"
    }];
    const LoginCheck=(e)=>{
        e.preventDefault();
        console.log(password);
         console.log(userName)
        // const navigate = useNavigate();
        if(userName==="ganesh123@gmail.com"&&password==="Breeze@123"){
            window.localStorage.setItem("value","yes");
                    if(window.localStorage.getItem("value")){
                    navigate("/profile");
                    }
        }
        else{
        data.map((data,i)=>{
            console.log(data)
              if(userName===data.userName && password===data.password){
                    console.log(true);
                    window.localStorage.setItem("value","yes");
                    if(window.localStorage.getItem("value")){
                    navigate("/employeeDetail");
                    }
                }
            })
        }
    }
    return (
        <div className="containerParent">
        <div className="container">
        <h2>Login</h2>
        <div className="userName">
            <input type="text" placeholder="userName" className="userNameInp" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="password">
            <input type="text" placeholder="password" className="PasswordInp" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="button">
            <button className="btn" onClick={LoginCheck}>Login</button>
        </div>
    </div>
    </div>
    )
}

export default Login
