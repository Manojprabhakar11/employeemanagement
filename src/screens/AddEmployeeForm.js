import React from 'react'
import "./AddEmployeeForm.css"
import {useState} from "react"
// import EmployeeDetail from './EmployeeDetail';
function AddEmployeeForm(props) {
    const [firstName, setfirstName] = useState(props.employeeInfo ? props.employeeInfo[0].firstName:'' );
    const [lastName,setLastName]=useState(props.employeeInfo ? props.employeeInfo[0].lastName:'');
    const [phNo,setPhNo]=useState(props.employeeInfo ? props.employeeInfo[0].number:'');
    const [address,setAddress]=useState(props.employeeInfo ? props.employeeInfo[0].address:'');
    const [employeeId,setEmployeeId]=useState(props.employeeInfo ? props.employeeInfo[0].employeeId:'');
    const [qualification,setQualification]=useState(props.employeeInfo ? props.employeeInfo[0].qualification:'');
    const [activeValue,setActiveValue]=useState("");
    const [numberError,setNumberError]=useState(false);
    const [firstNameError,setfirstNameError]=useState(false);
    const [lastNameError,setLastNameError]=useState(false);
    const [employeeIdError,setEmployeeIderror]=useState(false);
    const numberValidation=/^[0-9]{10}$/;
    // const [employeeData,setEmployeeData]=useState([]);
    // useEffect(() => {
    //    props?.employeeInfo && setfirstName(props.employeeInfo ? props.employeeInfo.firstName:'');
    // }, [])
     console.log(props.employeeInfo , 'passedinfo')
     console.log(firstName)
    const firstNameInput=(e=>{
            setfirstName(e.target.value); 
            // console.log(firstName) 
    });
    const statusAction=(e=>{
        setActiveValue(e.target.value);
    })
    // const EditFirstNameInput=(e=>{
    //     setfirstName(e.target.value);
    // });
    // const EditLastNameInput=(e=>{
    //     setLastName(e.target.value);
    // });
    // const EditPhNoInput=(e=>{
        // console.log((e.target.value));
        // e.preventDefault();
        // if(numberValidation.test(e.target.value)){
            // console.log("true");
        //    setPhNo(e.target.value);
    
        // else{
        //     setNumbererror(false);
        // }
    // });
    // const EditAddressInput=(e=>{
    //     setAddress(e.target.value);
    // });
    // const EditEmployeeIdInput=(e=>{
    //     setEmployeeId(e.target.value);
    // });
    // const EditQualificationInput=(e=>{
    //     setQualification(e.target.value);
    // });
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
    const ErrorPopup=()=>{
        if(!firstName&&!lastName&&!numberValidation.test(phNo)&&!employeeId){
            setNumberError(true);
            setfirstNameError(true);
            setLastNameError(true);
            setEmployeeIderror(true);
        }
        else if(!firstName&&!lastName&&!numberValidation.test(phNo)){
            setNumberError(true);
            setfirstNameError(true);
            setLastNameError(true);
        }
        else if(!firstName&&!lastName){
            setfirstNameError(true);
            setLastNameError(true);
        }
        else if(!lastName&&!numberValidation.test(phNo)&&!employeeId){
            setNumberError(true);
            setLastNameError(true);
            setEmployeeIderror(true);
        }
        else if(!firstName&&!numberValidation.test(phNo)&&!employeeId){
            setNumberError(true);
            setfirstNameError(true);
            setEmployeeIderror(true);
        }
        else if(!numberValidation.test(phNo)&&!employeeId){
            setNumberError(true);
            setEmployeeIderror(true);
        }
        else if(!firstName&&lastName&&!employeeId){
            setfirstNameError(true);
            setLastNameError(true);
            setEmployeeIderror(true);
        }
        else if(!firstName){
            setfirstNameError(true);
        }
        else if(!lastName){
            setLastNameError(true);
        }
        else if(!employeeId){
            setEmployeeIderror(true);
        }
        else if(!numberValidation.test(phNo)){
            setNumberError(true);
        }
        else if(!numberValidation.test(phNo)&&!firstName){
            setNumberError(true);
            setfirstNameError(true);
        }
        else if(!numberValidation.test(phNo)&&!lastName){
            setfirstNameError(true);
            setLastNameError(true);
        }
        else if(!employeeId&&!firstName){
            setfirstNameError(true);
            setEmployeeIderror(true);
        }
        else if(!employeeId&&!lastName){
            setLastNameError(true);
            setEmployeeIderror(true);
        }
    }
    const editEmployee=(e)=>{
            e.preventDefault();
            if(firstName&&lastName&&numberValidation.test(phNo)&&employeeId){
                const editedData={
                    firstName:firstName,
                    lastName:lastName,
                    number:phNo,
                    address:address,
                    employeeId:employeeId,
                    status:activeValue?activeValue:"active",
                    qualification:qualification,
                    id:props.employeeInfo[0].id
                    }
                    props.employeeInfoUpdated(editedData);
                    props.cancelHandler();
                }
                else{
                    ErrorPopup();
                }
        }

    const addEmployee=(e)=>{
        e.preventDefault();
        if(firstName&&lastName&&numberValidation.test(phNo)&&employeeId){
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
        props.employeeData(data);
        props.cancelHandler();
        // setEmployeeData([...employeeData,data]);
        console.log(data);
    }
    else {
        ErrorPopup();
    }
        // props.cancelHandler();
        // console.log(employeeDetail);
        // localStorage.setItem('demo',JSON.stringify([...employeeData,data]));
        // localStorage.setItem('demo',JSON.stringify(...employeeDetail,data))
        // props.cancelHandler();
        // props.employeeData();
    }

    return (
        <div className="employeeFormParent">
            <div className="formParent">
                <div className="formHeader">Fill Data</div>
            <form >
                 <div className="formInput">
                <div>
                {props.employeeInfo&&<label htmlFor="firstName" className="formInputLabel">first Name:</label>}
                <input type="text" placeholder="FirstName" className="formInputChild"  onChange={firstNameInput} value={firstName}></input>
             
                {firstNameError && <div className="ErrorPop">*please enter valid data</div>}
                </div> 
                </div>
                <div className="formInput">
                <div>
                {props.employeeInfo&&<label htmlFor="firstName" className="formInputLabel">last Name:</label>}
                </div>
                <input type="text" placeholder="LastName" className="formInputChild" value={lastName}  onChange={lastNameInput}></input>
                
                {lastNameError && <div className="ErrorPop">*please enter valid data</div>}
                </div>

                <div className="formInput">

                <div>
                {props.employeeInfo&&<label htmlFor="firstName" className="formInputLabel">number:</label>}
                </div>
                <input type="number" placeholder="PhoneNumber" maxlength="10" className="formInputChild" value={phNo} onChange={phNoInput}></input>
                {numberError && <div className="ErrorPop">*please enter valid number</div>}
                </div>

                <div className="formInput"> 
                <div>
                {props.employeeInfo&&<label htmlFor="firstName" className="formInputLabel">address:</label>}</div>
                <input type="text" placeholder="address" className="formInputChild" value={address} onChange={addressInput}></input>
                </div>

                <div className="formInput">
                
                <div>
                {props.employeeInfo&&<label htmlFor="firstName" >employee Id:</label>}
                </div>
                <input type="text" placeholder="employeeId" className="formInputChild" value={employeeId} onChange={employeeIdInput}></input>
                
                {employeeIdError && <div className="ErrorPop">*please enter valid Id</div>}
                </div>
                
                <div className="formInput">
                <div>
                {props.employeeInfo&&<label htmlFor="firstName" className="formInputLabel">qualification:</label>}
                </div>
                <input type="text" placeholder="qualification" className="formInputChild" value={qualification}  onChange={qualificationInput}></input>
                
                </div>

            </form>
            <div className="formAdd">
                <button className="formAddCancelBtn" onClick={cancelHandler}>cancel</button>
                {props.employeeInfo?<button className="formAddBtn" onClick={editEmployee}>edit</button>:
                                <button className="formAddBtn" onClick={addEmployee}>Add New</button>}
                {props.employeeInfo&&<select name="status" className="formAddBtn" onClick={statusAction}>
                <option value="activate">active</option>
                    <option value="deactivate">deactive</option>
                    
                    </select>}
            </div>
            </div>

        </div>
    )
}

export default AddEmployeeForm
