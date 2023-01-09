import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Profile.css"
import AddEmployeeForm from "./AddEmployeeForm"
function Profile() {
    const [employeeDetail,setEmployeeDetail]=useState(localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[]);
    const [addOptions,setAddOptions]=useState(false);
    const [formModal,setFormModal]=useState(false);
    const [editFormModal,setEditFormModal]=useState(false);
    const [editData , setEditdata] = useState('')
    // const recievedData=window.localStorage.getItem("data")?JSON.parse(window.localStorage.getItem("data")):[];
    useEffect(() => {
        if(!storedValue){
            navigate("/");
        }
        setEmployeeDetail(localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[])
    },[])
    // employeeDetail.map((e)=>{
        // console.log(employeeDetail.length);
    // })
    const navigate=useNavigate();
    const storedValue=window.localStorage.getItem("value");
    const logout=()=>{
        window.localStorage.removeItem("value");
        navigate("/");
    }
    const addActions=(dataId)=>{
        console.log(dataId,"addoptions");
        employeeDetail.map(data=>{
            console.log(data,"mapped")
            console.log(data.id===dataId)
           return  data.id===dataId?setAddOptions(true):"";
        })
        
    }
    const editHandler=(dataId)=>{
        setEditFormModal(true);
        setAddOptions(false);
        setFormModal(false);
        const findDataForEdit=employeeDetail.filter(data=>{
            if(data.id===dataId){
                console.log(data,"edithand")
             return  data;
             
            }
        });
        console.log(findDataForEdit,"filtered2")
        setEditdata(findDataForEdit);
        // console.log(findDataForEdit,"filtered1")
        // const filteredData=employeeDetail.filter(data=>{
        //     return findDataForEdit.filter(findData=>{
        //         console.log(findData.id===data.id,"check");
        //         return findData.id===data.id;
        //         //  if(findData.id===data.id){
        //         //      return data;
        //         //  }
        //         //  else{
        //         //      return;
        //         //  }
        //     });
        // };
        // if(editFormModal===true){
        //     console.log(findDataForEdit , '1');
        // <AddEmployeeForm employeeInfo={findDataForEdit}/>
        // }
         
    }
    const editedData=((data)=>{
        const recievedData=localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[];
        console.log(data,"updated");
       const updatedDetail= recievedData.map((oldData,i)=>{
            if(oldData.id===data.id){
                return oldData={
                        firstName:data.firstName,
                        lastName:data.lastName,
                        id:data.id,
                        number:data.number,
                        employeeId:data.employeeId,
                        address:data.address,
                        qualification:data.qualification,
                        status:data.status
                };
                // return {firstName : data.firstName,
                //         lastName:data.lastName,
                //         id:data.id,
                //         employeeId:data.employeeId,
                //         address:data.address,
                //         qualification:data.qualification,
                //         status:data.status
                // }
            }
            else{
                return oldData;
            }
        });
        console.log(updatedDetail,"updatedDetail");
        localStorage.setItem("datas",JSON.stringify(updatedDetail));
        setEmployeeDetail(localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[]);
        console.log(employeeDetail,"detail")
        
    //    const replacedDetail= recievedData.find(oldData=>{
    //       return oldData.id===data.id
    //    }).replace(updatedDetail);
    //    console.log(replacedDetail) 
    });

    const deleteHandler=(dataId)=>{
        const updatedData=employeeDetail.filter(data=>{
            return data.id!==dataId;
        });
        localStorage.setItem('datas',JSON.stringify(updatedData));
        setEmployeeDetail(updatedData);
        // window.localStorage.setItem("data",JSON.stringify(employeeDetail));
        setAddOptions(false);
    }
    const ShowModal=()=>{
        setFormModal(true);
        setEditFormModal(false);
    }
    const cancelHandler=()=>{
        setFormModal(false);
        setEditFormModal(false);
    }
    const triggerCloseModal=()=>{
        cancelHandler();
        setEmployeeDetail(localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[]);
    }
    const employeeData=(data=>{
        const recievedData=localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[];
        recievedData.push(data);
        console.log(data,"incoming");
        localStorage.setItem("datas",JSON.stringify(recievedData));
        setEmployeeDetail(localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[]);
        console.log(employeeDetail,"detail")
    //    window.localStorage.setItem("data",JSON.stringify(employeeDetail));
    //    const recievedData=JSON.parse(window.localStorage.getItem("data"))
    //    setEmployeeDetail(recievedData);
        // setEmployeeDetail(prevData=>{
        //     return [...prevData,data]
        // })
    })
    return (
        <div>
            {editFormModal && <AddEmployeeForm employeeInfo={editData} cancelHandler={triggerCloseModal} employeeInfoUpdated={editedData}/> }
            {formModal&&<AddEmployeeForm cancelHandler={triggerCloseModal} employeeData={employeeData}/>}
            <div className="logout">
                <button className="logoutBtn1" onClick={logout}>LogOut</button>
        </div>
            <div className="btnParent">
                <button className="btn1" onClick={ShowModal}>Add employee</button>
            </div>
            {employeeDetail.length!==0 ?
            <div className="tableHeader">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>number</th>
                        <th>status</th>
                        <th>employeeId</th>
                        <th>actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeDetail.length!==0&& employeeDetail.map(data=>{
                       return <tr key={data.id}>
                            <td>{`${data.firstName} ${data.lastName}`}</td>
                            <td>{data.number}</td>
                            <td>{data.status}</td>
                            <td>{data.employeeId}</td>
                            <td>{addOptions===false?<i className="fa fa-ellipsis-v" key={data.firstName} onClick={()=>{addActions(data.id)}}></i>:
                            <div className="actions">
                                <button className="editBtn" onClick={()=>editHandler(data.id)} key={data.employeeId}>edit</button>
                                <button className="deleteBtn" onClick={()=>deleteHandler(data.id)}key={data.number}>delete</button>
                            </div>}
                            </td>
                    </tr>
                    })}
                    </tbody>
                </table>
            </div>:
            <div className="ErrorPopUp">
                No details to show
            </div>
                }
                
                
        </div>
                
    )
}

export default Profile
