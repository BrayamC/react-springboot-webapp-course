import React, { Component } from 'react'

export default class CreateEmployeeComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
        firstName: '',
        lastName: '',
        emailId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
    this.changeEmailHandler = this.changeEmailHandler.bind(this)
    this.saveEmployee = this.saveEmployee.bind(this)
    this.cancel = this.cancel.bind(this)


}

    changeFirstNameHandler = (e) => {
        this.setState({firstName: e.target.value});
    }
    changeLastNameHandler = (e) => {
        this.setState({lastName: e.target.value});
    }
    changeEmailHandler = (e) => {
        this.setState({email: e.target.value});
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.email
        }
        console.log('employee => ' + JSON.stringify(employee))
    }

    cancel() {
        this.props.history.push('/employees')
    }
  render() {
    return (
      <div>
        <div className="container"> 
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label> First Name: </label>
                                <input 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={this.changeFirstNameHandler} 
                                />
                                <label> Last Name: </label>
                                <input 
                                    placeholder="Last Name" 
                                    name="lastName" 
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={this.changeLastNameHandler} 
                                />
                                <label> Email: </label>
                                <input 
                                    placeholder="Email" 
                                    name="email" 
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.changeEmailHandler} 
                                />
                            </div>
                            <button className="btn btn-success" onClick={this.saveEmployee}> Save </button>
                            <button className="btn btn-danger" onClick={this.cancel}> Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
