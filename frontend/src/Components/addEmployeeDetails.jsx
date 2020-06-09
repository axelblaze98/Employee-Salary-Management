import React, { Component } from "react";
import Dropdown from "./dropdown";
import InputHours from "./Forms/inputHoursForm";
import Allowance from "./Forms/inputAllowanceForm";
import Deduction from "./Forms/inputDeductionsForm";
import SubmitButton from "./submitbutton";
import axios from "axios";

class addEmployeeDetails extends Component {
  constructor() {
    super();
    this.state = {
      controllers: [
        { name: "dropdown", isActive: false },
        { name: "bt1", isActive: false },
        { name: "bt2", isActive: false },
        { name: "bt3", isActive: false },
      ],
      hours: 0,
    };
  }
  onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:4000/api/createpay/${this.state.empid}`,this.state)
      .then((data) => alert("User data was added successfully"))
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          alert("Username not found")
        }
      });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleVisibility = (index) => {
    let tmp = this.state.controllers;
    tmp[index].isActive = !tmp[index].isActive;
    this.setState({ controllers: tmp });
  };
  render() {
    return (
      <div>
        <Dropdown
          isClicked={this.handleVisibility}
          isOpen={this.state.controllers[0]}
        ></Dropdown>
        <form>
          <div className="form-group row" style={{ marginTop: "20px" }}>
            <label className="col-sm-3 col-form-label">Employee ID</label>
            <div className="col-sm-4">
              <input
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Enter Employee ID"
                name="empid"
              ></input>
            </div>
          </div>
        </form>
        <div>
          {this.state.controllers[1].isActive === true && (
            <InputHours handleChange={this.onChange} />
          )}
        </div>
        <div>
          {this.state.controllers[2].isActive === true && (
            <Allowance handleChange={this.onChange} />
          )}
        </div>
        <div>
          {this.state.controllers[3].isActive === true && (
            <Deduction handleChange={this.onChange} />
          )}
        </div>
        <div>
          <SubmitButton handleSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default addEmployeeDetails;
