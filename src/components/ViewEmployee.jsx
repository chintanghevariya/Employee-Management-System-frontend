import React, { Component } from 'react'
import EmployeeService from '../services/EmpService'

class ViewEmployee extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    
    return(){
        this.props.history.push('/employees');
    }

    // componentDidUpdate(){
    //     EmployeeService.getEmployeeById(this.state.id).then( res => {
    //         this.setState({employee: res.data});
    // }
    componentDidMount(){
    EmployeeService.getEmployeeById(this.state.id).then( res => {
    this.setState({employee: res.data});
    }
    )
}

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        {
                            <div className = "row">
                            <label> Employee's ID: </label>
                            <div> &nbsp;<b>{ this.state.employee._id }</b></div>
                        </div>}
                        {
                         <div className = "row">
                            <label> Employee's First Name: </label>
                            <div> &nbsp;<b>{ this.state.employee.FirstName }</b></div>
                        </div> }
                        <div className = "row">
                            <label> Employee's Last Name: </label>
                            <div> &nbsp;<b>{ this.state.employee.LastName }</b></div>
                        </div>
                        <div className = "row">
                            <label> Employee's Email ID: </label>
                            <div> &nbsp;<b> { this.state.employee.email }</b></div>
                        </div>   
                    </div>

                    <div className = "card-body text-center">
                        <button className='btn btn-secondary' onClick={this.return.bind(this)}>Return</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployee
