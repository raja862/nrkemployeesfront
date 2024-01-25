import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./Employeelist.css"
import axios from "axios";
const EmployeesList=()=>{
const [employees,setEmployees]=useState([]);

useEffect(()=>{
    getEmployees();
},[]);

// const getEmployees=async()=>{
//     try{
//         const response=await axios.get("http://localhost:4000/employees")
//         setEmployees(response.data)
//     }catch(error){
//         console.log('Error:',error);
//     }
// }

// const handleDelete= async(employeeID)=>{
//     try{
//         const response=await axios.delete(`http://localhost:4000/employees/${employeeID} `)
// if(response){
//     getEmployees();
// }
//     }catch(error){
// console.log(error)
//     }
// }
const getEmployees = async () => {
    try{
        const response = await axios.get(`https://empcurd.onrender.com/employees`);
        setEmployees(response.data);
    }catch(error){
        console.log('Error: ', error);
    }
}

const handleDelete = async (employeeID) => {
    try{
        const response = await axios.delete(`https://empcurd.onrender.com/employees/${employeeID}`);
        if(response){
            getEmployees();
        }
    }catch(error){
        console.log(error);
    }
}

    return(<div className="employeelist">
    
    
<h1> NRK ORG EMPLOYEESLIST</h1>   
<table className="table table-striped">
    <thead>
        <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>DESIGNATION</th>
            <th>MOBILE NUMBER</th>
            <th>BLOOD GROUP</th>
            <th>EDITE EMPLOYEE</th>
        </tr>
    </thead>
    <tbody>
    {employees.length ?? employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.bloodGroup}</td>
                            <td>
                                <Link  className="btn btn-link"  to={`/employees/${employee._id}/update`}>UPDATE</Link>
                                <button className="btn btn-link" onClick={() => handleDelete(employee._id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
    </tbody>
</table>




    </div>)
}
export default EmployeesList;
