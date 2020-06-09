import React, { Component } from "react";
import axios from "axios";

const Row = (props) => {
  return props.keys.map((key) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

class EmployeeDetails extends Component {
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
  getKeys = () => {
    const value = Object.keys(this.state.empdetails[0]);
    const key = [value[1], value[2], value[3]];
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
              <caption>List of Employees</caption>
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

export default EmployeeDetails;
