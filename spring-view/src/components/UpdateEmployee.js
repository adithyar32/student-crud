import React, { useState,useEffect } from 'react'
import { useNavigate , useParams} from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEmployee = () => {

    const {id}=useParams();

    const [employee,setEmployee]=useState({
        id:id,
        name:"",
        phone:'',
        mail:''
    });

    useEffect(()=>{
        const fetchdata=async()=>{
          const fetchEmployees=await EmployeeService.getEmployeeById(id);
          setEmployee(fetchEmployees.data);
        }
        fetchdata();
    },[]);

    const HandleChange=(e)=>
    {
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]:value})
        
    }

    const updateEmployee=(e,id)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then(()=>{
            console.log("success");
            navigate('/');
        })
        .catch((response)=>
        {
            console.log(response)
        })
    }
    
    const navigate=useNavigate();  

    return (
    <>
    <div className='mx-60 my-20 w-fit bg-slate-200 rounded border border-neutral-950 '>
        <div className='border border-neutral-950 text-2xl text-center px-10 py-5 text-indigo-950 font-extrabold bg-slate-400 rounded'>
            <h1>UPDATE EMPLOYEE PAGE</h1>
        </div>
        <div>
            <div className='tracking-wide text-center py-8 mx-14 '>
                <input
                onChange={(e)=>HandleChange(e)}
                value={employee.name}
                name='name' type='text' className='hover:border border-neutral-950 rounded w-full px-4 py-2 my-4 text-indigo-950 font-semibold' placeholder='Name'></input>
                <input 
                onChange={(e)=>HandleChange(e)}
                value={employee.phone}
                name='phone' type='text' pattern="[0-9]{10}" className='hover:border border-neutral-950 rounded w-full px-4 py-2 my-4 text-indigo-950 font-semibold' placeholder='Phone No'></input>
                <input 
                onChange={(e)=>HandleChange(e)}
                value={employee.mail}
                name='mail' type='email' className='hover:border border-neutral-950 rounded w-full px-4 py-2 my-4 text-indigo-950 font-semibold' placeholder='E-Mail'></input>
            </div>
            <div className='text-center '>
                <button onClick={(e)=>{updateEmployee(e,employee.id)}} className='px-5 mx-5 my-4 text-indigo-950 text-center font-bold hover:font-extrabold hover:bg-slate-800 hover:text-white bg-slate-400 border py-2 tracking-wide rounded'>Save</button>
                <button onClick={()=>navigate('/')} className='px-5 mx-5 text-indigo-950 text-center font-bold hover:font-extrabold hover:bg-slate-800 hover:text-white bg-slate-400 border py-2 tracking-wide rounded'>Cancel</button>
            </div>
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default UpdateEmployee;