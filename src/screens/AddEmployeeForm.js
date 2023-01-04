import React from 'react'
import "./AddEmployeeForm.css"
import {useState} from "react"
// import EmployeeDetail from './EmployeeDetail';
function AddEmployeeForm(props) {
    const [firstName, setfirstName] = useState(props?.employeeInfo ? props?.employeeInfo?.firstName  :'' );
    const [lastName,setLastName]=useState("");
    const [phNo,setPhNo]=useState("");
    const [address,setAddress]=useState("");
    const [employeeId,setEmployeeId]=useState("");
    const [qualification,setQualification]=useState("");
    const [employeeData,setEmployeeData]=useState([]);
     console.log(props.employeeInfo , '2')
     console.log(firstName)
    const firstNameInput=(e=>{
            setfirstName(e.target.value); 
            console.log(firstName) 
    });
    const lastNameInput=(e=>{
        setLastName(e.target.value);
    });
    const phNoInput=(e=>{
        setPhNo(e.target.value);
    });
    const addressInput=(e=>{
        setAddress(e.target.value);
    });
    const employeeIdInput=(e=>{
        setEmployeeId(e.target.value);
    });
    const qualificationInput=(e=>{
        setQualification(e.target.value);
    })
    const cancelHandler=()=>{
        props.cancelHandler();
    }
    const editEmployee=()=>{
            // setHasEmployeeInfo(true);
            
            // setfirstName(props.employeeInfo.firstName);
            // setLastName(props.employeeInfo.lastName);
            // setPhNo(props.employeeInfo.number);
            // setQualification(props.employeeInfo.qualification);
            // setAddress(props.employeeInfo.address);
            // setEmployeeId(props.employeeInfo.employeeId);
            // firstNameInput(firstName);
            // lastNameInput(lastName);
            // phNoInput(phNo);
            // addressInput(address);
            // employeeIdInput(employeeId);
            // qualificationInput(qualification);
        }
    
    

    const addEmployee=(e)=>{
        e.preventDefault();
        const data={
            firstName:firstName,
            lastName:lastName,
            number:phNo,
            address:address,
            employeeId:employeeId,
            status:"active",
            qualification:qualification,
            id:Math.random().toString()*20
        }
        // setfirstName("");
        // setLastName("");
        // setPhNo("");
        // setQualification("");
        // setAddress("");
        // setEmployeeId("");
        // props.employeeData(data);
        setEmployeeData([...employeeData,data]);
        console.log(data);
        // props.cancelHandler();
        // console.log(employeeDetail);
        localStorage.setItem('demo',JSON.stringify([...employeeData,data]));
        // localStorage.setItem('demo',JSON.stringify(...employeeDetail,data))
        // props.cancelHandler();
        // props.employeeData();
    }

    return (
        <div>
            <div className="formParent">
            <form >
                <div className="formInput">
                <input type="text" placeholder="FirstName" className="formInputChild" onChange={firstNameInput} value={props.employeeInfo?.firstName}></input>
                </div>
                <div className="formInput">
                <input type="text" placeholder="LastName" className="formInputChild" onChange={lastNameInput}></input>
                </div>
                <div className="formInput">
                <input type="number" placeholder="PhoneNumber" className="formInputChild" onChange={phNoInput}></input>
                </div>
                <div className="formInput"> 
                <input type="text" placeholder="address" className="formInputChild" onChange={addressInput}></input>
                </div>
                <div className="formInput">
                <input type="text" placeholder="employeeId" className="formInputChild" onChange={employeeIdInput}></input>
                </div>
                <div className="formInput">
                <input type="text" placeholder="qualification" className="formInputChild" onChange={qualificationInput}></input>
                </div>
            </form>
            <div className="formAdd">
                <button className="formAddCancelBtn" onClick={cancelHandler}>cancel</button>
                {props.employeeInfo?<button className="formAddBtn" onClick={editEmployee}>edit</button>:
                                <button className="formAddBtn" onClick={addEmployee}>Add New</button>}
            </div>
            </div>

        </div>
    )
}

export default AddEmployeeForm
