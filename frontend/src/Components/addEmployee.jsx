import React, { Component } from "react";
import Form from "./Forms/addEmployeeForm";
import axios from "axios";

const currentState = {
  empid: "", name: "", rate: 0, valempid: true, valname: true, valrate: true
};
class addEmployee extends Component {
  constructor() {
    super();
    this.state = {
      empid: "", name: "", rate: 0,valempid:true,valname:true,valrate:true
    };
  }
  validateForm=() =>{
    const { empid, name, rate } = this.state;
    if (empid.length <= 4 || empid.length >= 6) {
      this.setState({ valempid: false });
      return false
    }
    else if (name.length < 3) {
      this.setState({ valname: false });
      return false
    }
    else if(rate < 0) {
      this.setState({ valrate: false });
      return false
    }
    return true;
  }
  onSubmit = (event) => {
    event.preventDefault();
    var isValid;
    isValid=this.validateForm();
    if (isValid) {
      axios
        .post("http://localhost:4000/api/create", this.state)
        .then((data) => {
          alert("User Added")
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 500") {
            alert("Please enter a unique Employee ID");
          }
        });
      this.setState(currentState)
    }

  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return <Form handleChange={this.onChange} handleSubmit={this.onSubmit} valrate={this.state.valrate} valname={this.state.valname} valempid ={this.state.valempid} />;
  }
}

export default addEmployee;
