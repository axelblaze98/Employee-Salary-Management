import React, { Component } from "react";
import axios from "axios";

const currentState = { username: "", password: "", valuser: true };

class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "", valuser: true };
  }
  validateForm = () => {
    const { username } = this.state;
    if (username.length <= 3) {
      this.setState({ valuser: false });
      return false;
    }
    return true;
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    var isValid;
    isValid = this.validateForm();
    if (isValid) {
      axios
        .post("http://localhost:4000/api/verify", this.state)
        .then((data) => {
          if (data.data === "Invalid User Name or Password") {
            alert("Invalid Username Or Password");
          } else {
            sessionStorage.setItem("UserName", data.username);
            window.location.assign("/home");
          }
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 500") {
          }
        });
      this.setState(currentState);
    }
  };
    gotoRegister = (event) => {
        event.preventDefault();
    window.location.assign("/register");
  };
  render() {
    return (
      <div>
        <form className="form ">
          <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>
          <input
            style={{ marginBottom: "5px" }}
            type="text"
            className="form-control col-4"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          ></input>
          {this.state.valuser ? null : (
            <div style={{ color: "Red", fontSize: 10 }}>
              User Name length must be greater than 3
            </div>
          )}
          <input
            style={{ marginBottom: "5px" }}
            type="password"
            className="form-control col-4"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          ></input>
          <button
            style={{ marginRight: "2px" }}
            className="btn btn-primary col-2"
            type="submit"
            onClick={this.handleSubmit}
          >
            Sign in
          </button>
          <button
            className="btn btn-primary col-2"
            type="submit"
            onClick={this.gotoRegister}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
