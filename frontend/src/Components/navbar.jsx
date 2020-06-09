import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class navbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
        <Nav.Link href="/viewemployee">Employees</Nav.Link>
        <Nav.Link href="/addemployee">Add Employee</Nav.Link>
        <NavDropdown title="Edit Details" id="basic-nav-dropdown">
        <NavDropdown.Item href="adddetails">Add</NavDropdown.Item>
          <NavDropdown.Item href="updatedetails">Update</NavDropdown.Item>
      </NavDropdown>
          <Nav.Link href="/payroll">Payroll Report</Nav.Link>
          <Nav.Link href="/login">Logout</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default navbar;
