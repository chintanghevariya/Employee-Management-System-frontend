import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: this.props.match.params.id,
            FirstName: '',
            LastName: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){

        if(this.state._id === '_id'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state._id).then( (res) =>{
                let employee = res.data;
                this.setState({FirstName: employee.FirstName,
                    LastName: employee.LastName,
                    email : employee.email
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {FirstName: this.state.FirstName, LastName: this.state.LastName, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state._id === '_id'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state._id).then( res => {
                this.props.history.push('/employees');
            });
            this.props.history.push('/employees');
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({FirstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({LastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state._id === '_id'){
            return <h2 className="text-center">Add Employee</h2>
        }else{
            return <h2 className="text-center">Update Employee</h2>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div id='div' className = "col-md-6 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="FirstName" className="form-control" 
                                                value={this.state.FirstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="LastName" className="form-control" 
                                                value={this.state.LastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
