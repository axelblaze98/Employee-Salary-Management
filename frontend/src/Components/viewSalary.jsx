import React, { Component } from "react";
import axios from "axios";

const Row = (props) => {
  var month = new Date().getMonth();
  return props.keys.map((key, index) => {
    if (key === "id") {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    } else if (key === "salary") {
      const { rate } = props.data;
      const { hours, allowances, deductions } = props.data.monthly_details[month];
      return (
        <td key={index + 100}>{rate * hours + allowances - deductions}</td>
      );
    } else {
      return <td>{props.data.monthly_details[month][key]}</td>;
    }
  });
};

class Salary extends Component {
  constructor() {
    super();
    this.state = { empdetails: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/view")
      .then((data) => {
        this.setState({ empdetails: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  redirect = (event) => {
    event.preventDefault();
    window.location.assign("viewSalary");
  };
  getKeys = () => {
    const month = new Date().getMonth(); 
    const value = Object.keys(this.state.empdetails[0].monthly_details[month]);
    const key = ["id", value[1], value[2], value[3], "salary"];
    return key;
  };
  getHeader = () => {
    var keys = this.getKeys();
    return keys.map((key) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };
  getRow = () => {
    var item = this.state.empdetails;
    var keys = this.getKeys();
    return item.map((row, index) => {
      return (
        <tr key={index}>
          <Row key={index} data={row} keys={keys}></Row>
        </tr>
      );
    });
  };
  render() {
    const { empdetails } = this.state;
    return (
      <div>
        {empdetails.length ? (
          <div>
            <table className="table table-bordered table-hover">
              <caption>Salary of Employees</caption>
              <thead className="thead-dark">
                <tr>{this.getHeader()}</tr>
              </thead>
              <tbody className="table-hover">{this.getRow()}</tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Salary;
