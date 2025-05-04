
import {useNavigate} from 'react-router-dom'
import React, { useEffect,useState } from 'react'
import EmployeeService from '../Service/EmployeeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employeetable = () => {

  const[Loading,setLoading]=useState(true);
  const [employees,setEmployees]=useState(null);

  const deleteEmployee=(e,id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then(()=>{
        if(employees)
        {
          setEmployees((prevElement)=>
          {
            return prevElement.filter((employee)=>employee.id!==id);
          })
        }
        toast.success("Employee ID "+id+" Deleted Successfully");
      })
  }

  useEffect(()=>{
      
      const fetchdata=async()=>{
        setLoading(true);
        const fetchEmployees=await EmployeeService.getEmployees();
        setEmployees(fetchEmployees.data);
        setLoading(false);
      }
      fetchdata();
  },[]);

  const navigate=useNavigate()
  
  return (
    <div className="mx-60 my-10 w-full">
      <button 
      onClick={()=> navigate('/addEmployee')}
      className='text-indigo-950 text-center font-bold hover:font-extrabold hover:bg-slate-800 hover:text-white bg-slate-400 border px-5 py-2 tracking-wide rounded'>ADD EMPLOYEE</button>

      <table className="shadow text-indigo-950 border border-zinc-700 min-w-fit my-5 ">
        
        <thead className=" text-center  bg-slate-400">
          <tr className="">
            <th className="border-black border px-5 py-2 tracking-wide">ID</th>
            <th className="border-black border px-5 py-2 tracking-wide" >NAME</th>
            <th className="border-black border px-5 py-2 tracking-wide" style={{ minWidth: "200px", maxWidth: "400px", wordWrap: "break-word" }}>PHONE</th>
            <th className="border-black border px-5 py-2 tracking-wide" style={{ minWidth: "200px", maxWidth: "400px", wordWrap: "break-word" }}>E-MAIL</th>
            <th className="border-black border px-5 py-2 tracking-wide">ACTIONS</th>

          </tr>
        </thead>

        {!Loading && (
        <tbody className=" bg-slate-200 text-gray-800 text-s font-medium">
          
          {employees.map((employee)=>(
          <tr className=' hover:bg-slate-900 hover:bg-opacity-70 hover:text-slate-50'>
            <td key={employee.id} className="px-5 py-2 whitespace-nowrap border border-black">{employee.id}</td>
            <td className="px-5 py-2 whitespace-nowrap border border-black text-center">{employee.name}</td>
            <td className="px-5 py-2 whitespace-nowrap border border-black text-center">{employee.phone}</td>
            <td className="px-5 py-2 whitespace-nowrap border border-black text-center">{employee.mail}</td>
            <td className='px-5 py-2 whitespace-nowrap border border-black'>
              <a onClick={()=>navigate(`updateEmployee/${employee.id}`)}
              className='mr-4 text-blue-600 hover:underline hover:text-blue-100 hover:cursor-pointer'>edit</a>
              <a onClick={(e,id)=>deleteEmployee(e,employee.id)}
              className='text-red-600 hover:underline hover:text-red-100 hover:cursor-pointer'>delete</a>
            </td>
          </tr>
        ))}
        </tbody>
        )}
        
      </table>
      <ToastContainer/>
    </div>

  )
}

export default Employeetable