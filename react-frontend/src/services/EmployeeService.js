import axios from "axios";

const GET_EMPLOYEES = "https://jsonplaceholder.typicode.com/users"; 

class EmployeeService {

    getEmployees() {
        return axios.get(GET_EMPLOYEES);
    }
}

export default new EmployeeService();