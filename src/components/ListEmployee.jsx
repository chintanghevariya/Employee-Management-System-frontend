import React, { Component } from 'react'
import EmployeeService from '../services/EmpService'


class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(_id){
        EmployeeService.deleteEmployee(_id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee._id !== _id)});  
        });
    }
    viewEmployee(_id){
        this.props.history.push(`/view/${_id}`);
    }
    editEmployee(_id){
        this.props.history.push(`/add/${_id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add/_id');
    }

    render() {
        return (
            <div>
                 <h2 className="text-uppercase text-center">Employee's List</h2>
                 <div className = "row">
                    <button className="btn btn-primary btn-lg float-right" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-bordered table-hover shadow-lg p-3 mb-5 bg-white rounded">
                            <thead className='thead-dark'>
                                <tr>
                                    <th> Employee's ID</th>
                                    <th> Employee's First Name</th>
                                    <th> Employee's Last Name</th>
                                    <th> Employee's Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee._id} >
                                            <td>{employee._id}</td>
                                             <td> {employee.FirstName} </td>   
                                             <td> {employee.LastName}</td>
                                             <td> {employee.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee._id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.deleteEmployee(employee._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.viewEmployee(employee._id)} className="btn btn-success">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployee
