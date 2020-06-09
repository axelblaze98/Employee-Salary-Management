import React, { Component } from "react";
import NavBar from "./Components/navbar";
import PayrollReport from "./Components/viewEmployee";
import AddEmployee from "./Components/addEmployee"
import Home from "./Components/homePage"
import AddDetails from "./Components/addEmployeeDetails.jsx"
import UpdateDetails from "./Components/updateEmployeeDetails.jsx"
import Salary from "./Components/viewSalary.jsx"
import Login from "./Components/login"
import Register from "./Components/register.jsx"
import { BrowserRouter as Router, Switch, Route ,Redirect, withRouter} from "react-router-dom";
const Main = withRouter(({ location }) => {
  return (
      <div>
      {
        location.pathname !== '/login' && location.pathname !== '/register' && < NavBar > </NavBar>}
    <div className="container" >
      <div className="py-5" >
          <Switch >
          <Route path="/register" component={Register}></Route>
          <Route exact path="/"><Redirect to='/login'></Redirect></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/adddetails" component={AddDetails}></Route>
          <Route path="/updatedetails" component={UpdateDetails}></Route>
          <Route path="/addemployee" component={AddEmployee}></Route>
          <Route path="/viewemployee" component={PayrollReport}></Route>
          <Route path="/payroll" component={Salary}></Route>
        </Switch>
      </div>
      </div>
      </div>
)})
class App extends Component {
  render() { 
    return (<Router>
    <div id="app">
      <Main /> 
    </div>
    </Router >
    );
  }
}

export default App;
