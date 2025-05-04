import axios from'axios';

const base_url="http://localhost:8080";

class EmployeeService{
    saveEmployee(employee)
    {
        return axios.post(base_url+"/post",employee);
    }
    getEmployees()
    {
        return axios.get(base_url+"/get");
    }
    getEmployeeById(id)
    {
        return axios.get(base_url+"/get/"+id);
    }
    deleteEmployeeById(id)
    {
        return axios.delete(base_url+"/delete/"+id);
    }
    deleteEmployee()
    {
        return axios.delete(base_url+"/delete");
    }
    updateEmployee(employee,id)
    {
        return axios.put(base_url+`/put/${id}`,employee);
    }
}
export default new EmployeeService();