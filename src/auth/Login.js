import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"


function Login() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState(false);
    const [passwordError,setPasswordError]=useState(false);
    const navigate= useNavigate();
    const admin={
        adminName:"ganesh123@gmail.com",
        password:"Breeze@123"
    }
    const data=[
    {
        email:"manoj123@gmail.com",
        password:"Breeze@456",
        userName:"Manoj",
        age:"23",
        education:"BE",
        field:"civil"

    },
    {
        email:"bharath123@gmail.com",
        password:"Breeze@789",
        userName:"Bharath",
        age:"23",
        education:"BSc",
        field:"physics"
    }];
    const LoginCheck=(e)=>{
        e.preventDefault();
        console.log(password);
         console.log(userName)
        // const navigate = useNavigate();
        if(userName===admin.adminName&&password===admin.password){
            window.localStorage.setItem("value","yes");
                    if(window.localStorage.getItem("value")){
                    navigate("/profile");
                    }
                    
        }
        else if(userName===admin.adminName){
            setEmailError(false);
            // if(userName!==admin.adminName&&password!==admin.password){
            //     setEmailError(true);
            //     setPasswordError(true);
            // }
            // else if(userName!==admin.adminName){
            //     setEmailError(true);
            //     setPasswordError(false);
            // }
            if(password!==admin.password){
                setPasswordError(true);
            }
        }
        else if(userName!==admin.adminName){
        data.map((data)=>{
            console.log(data)
                if(userName===data.email && password===data.password){
                    window.localStorage.setItem("value","yes");
                    if(window.localStorage.getItem("value")){
                    navigate("/employeeDetail",{state:data});
                    }
                }
            });
                        if(userName!==data[0].email && userName!==data[1].email){
                            setEmailError(true);
                            if(password===data[0].password ||password===data[1].password){
                                if(password===data[0].password){
                                    setPasswordError(false);
                                    if(userName!==data[0].email){
                                        setEmailError(true);
                                    }
                                    else{
                                        setEmailError(false);
                                    }
                                }
                                else{
                                    if(password===data[1].password){
                                        setPasswordError(false);
                                        if(userName!==data[1].email){
                                            setEmailError(true);
                                        }
                                        else{
                                            setEmailError(false);
                                        }
                                    }
                                }
                            }
                            else{
                                setPasswordError(true); 
                            }
                        }
                        else if(userName===data[0].email ||userName===data[1].email){
                            if(userName===data[0].email){
                                setEmailError(false);
                                if(password!==data[0].password){
                                    setPasswordError(true);
                                }
                                else{
                                    setPasswordError(false);                                   
                                }
                            }
                            else{
                                if(userName===data[1].email){
                                    setEmailError(false);
                                    if(password!==data[1].password){
                                        setPasswordError(true);
                                    }
                                    else{
                                        setPasswordError(false); 
                                    }
                                }
                            }
                            
                        }
                        else if(password===data[0].password ||password===data[1].password){
                            if(password===data[0].password){
                                setPasswordError(false);
                                if(userName!==data[0].email){
                                    setEmailError(true);
                                }
                                else{
                                    setEmailError(false);
                                }
                            }
                            else{
                                if(password===data[1].password){
                                    setPasswordError(false);
                                    if(userName!==data[1].email){
                                        setEmailError(true);
                                    }
                                    else{
                                        setEmailError(false);
                                    }
                                }
                            }
                            
                        }
        }
        
    }
    
    return (
        <div className="containerParent">
        <div className="container">
        <h2>Login</h2>
        <div className="userName">
            <input type="text" placeholder="userName" className="userNameInp" onChange={(e) => setUserName(e.target.value)}/>
            {emailError && <div className="loginErrorPop">*please enter valid email</div>}
        </div>
        <div className="password">
            <input type="password" placeholder="password" className="PasswordInp" onChange={(e) => setPassword(e.target.value)}/>
            {passwordError && <div className="loginErrorPop">*please enter valid password</div>}
        </div>
        <div className="button">
            <button className="btn" onClick={LoginCheck}>Login</button>
        </div>
    </div>
    </div>
    )
}

export default Login
