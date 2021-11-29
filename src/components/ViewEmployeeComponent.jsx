import React, { Component,useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
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
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> &nbsp;<b>{ this.state.employee.FirstName }</b></div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> &nbsp;<b>{ this.state.employee.LastName }</b></div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> &nbsp;<b> { this.state.employee.email }</b></div>
                        </div>   
                    </div>

                    <div className = "card-body text-center">
                        <button className='btn btn-dark' onClick={this.return.bind(this)}>Return</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
