import React, { useState,useEffect } from 'react'
import "./Profile.css"
import AddEmployeeForm from "./AddEmployeeForm"
function Profile() {
    const [employeeDetail,setEmployeeDetail]=useState();
    const [addOptions,setAddOptions]=useState(false);
    const [formModal,setFormModal]=useState(false);
    const [editFormModal,setEditFormModal]=useState(false);
    const [editData , setEditdata] = useState('')
    // const recievedData=window.localStorage.getItem("data")?JSON.parse(window.localStorage.getItem("data")):[];
    useEffect(() => {
        setEmployeeDetail(localStorage.getItem('demo')?JSON.parse(localStorage.getItem('demo')):[])
    })
    // employeeDetail.map((e)=>{
        // console.log(employeeDetail.length);
    // })
    const addActions=()=>{
        setAddOptions(true)
    }
    const editHandler=(dataId)=>{
        setEditFormModal(true);
        setAddOptions(false);
        const findDataForEdit=employeeDetail.filter(data=>{
            return data.id===dataId;
        });
        setEditdata(findDataForEdit);

        // if(editFormModal===true){
        //     console.log(findDataForEdit , '1');
        // <AddEmployeeForm employeeInfo={findDataForEdit}/>
        // }
         
    }
    const deleteHandler=(dataId)=>{
        const updatedData=employeeDetail.filter(data=>{
            return data.id!==dataId;
        });
        setEmployeeDetail(localStorage.setItem('demo',JSON.stringify([...updatedData])));
        // window.localStorage.setItem("data",JSON.stringify(employeeDetail));
        setAddOptions(false);
    }
    const ShowModal=()=>{
        setFormModal(true);
    }
    const cancelHandler=()=>{
        setFormModal(false);
        setEditFormModal(false);
    }
    const employeeData=(data=>{
        console.log(data,"incoming")
        setEmployeeDetail(localStorage.getItem('demo')?JSON.parse(localStorage.getItem('demo')):[]
        );
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
            <div className="btnParent">
                <button className="btn1" onClick={ShowModal}>Add employee</button>
            </div>
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
                    {employeeDetail?.length!==0&& employeeDetail?.map(data=>{
                       return <tr key={data.id}>
                            <td>{data.firstName} {data.lastname}</td>
                            <td>{data.number}</td>
                            <td>{data.status}</td>
                            <td>{data.employeeId}</td>
                            <td>{addOptions===false?<i className="fa fa-ellipsis-v" onClick={addActions}></i>:
                            <div className="actions">
                                <button className="editBtn" onClick={()=>editHandler(data.id)}>edit</button>
                                <button className="deleteBtn" onClick={()=>deleteHandler(data.id)}>delete</button>
                            </div>}
                            </td>
                    </tr>
                    })}
                    </tbody>
                </table>
            </div>
                
                {editFormModal && <AddEmployeeForm employeeInfo={editData} cancelHandler={cancelHandler}/> }
            {formModal&&<AddEmployeeForm cancelHandler={cancelHandler} employeeData={employeeData}/>}
        </div>
    )
}

export default Profile
