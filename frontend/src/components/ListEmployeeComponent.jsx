import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeServices'
export default class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)

        
    }


    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`)
    }

    componentWillMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        })
    }

    addEmployee() {
        this.props.history.push('/add-employee')
    }

    deleteEmployee (id) {
        EmployeeService.deleteEmployeeById(id).then((res) => {
            this.setState({employees: this.state.employees.filter((employee) => employee.id !== id)})
        })
    }

  render() {
      console.log(this.state.employees)

        return (
          <div>
              <h2 className="text-center"> Employee List </h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
              </div>
              <div className="row">
                  <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
    
                    </thead>
                    <tbody>
                        
                        {
                        this.state.employees.length === 0 ? 
                                <tr>
                                    <td> - </td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>
                                        <button  style={{backgroundColor: "gray"}} className="btn btn-info"> Update </button>
                                        <button style={{backgroundColor: "gray"}} className="btn btn-danger"> Delete </button>
                                    </td>
                                </tr>
                                
                                : 
                            
                                this.state.employees.map((employee) => {
                                    return (
                                        <tr key = {employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info"> Update </button>
                                                <button style={{marginLeft: "10px"}}onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger"> Delete </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        
                    </tbody>

                  </table>
              </div>
          </div>
        )
    }

  }


