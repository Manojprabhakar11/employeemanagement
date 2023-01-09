import React,{useEffect} from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import "./EmployeeDetail.css"


function EmployeeDetail() {
    const navigate=useNavigate();
    const storedValue=window.localStorage.getItem("value");
    const passedDetail=useLocation();
    const logout=()=>{
        window.localStorage.removeItem("value");
        navigate("/");
    }
    useEffect(() => {
        if(!storedValue){
            navigate("/");
        }
    }, []);

    
    return (

        <div className="containerProfile">
            <div className="logout">
                <button className="logoutBtn" onClick={logout}>LogOut</button>
        </div>
        <div className="card">
            <div className="cardChild">
                <div className="details">
                    <h1>Profile Detail</h1>
                    <div className="mainDetails">
                        <div className="label">Name</div>
                        <div className="value">: {passedDetail.state.userName}</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Age</div>
                        <div className="value">: {passedDetail.state.age}</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Education</div>
                        <div className="value">: {passedDetail.state.education}</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Email</div>
                        <div className="value">: {passedDetail.state.email}</div>
                    </div>
                    <div className="mainDetails">
                        <div className="label">Field</div>
                        <div className="value">: {passedDetail.state.field}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
} 



export default EmployeeDetail
