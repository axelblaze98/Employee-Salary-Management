import React, { Component } from "react";
import SubmitButton from "../submitbutton.jsx";

class form extends Component {
  render() {
    const { handleChange, handleSubmit, valrate,valempid,valname } = this.props;
    return (
      <div
        className="card"
        style={{ padding: "20px", width: "500px", height: "290px" }}
      >
        <form>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Employee ID</label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Employee ID"
                onChange={handleChange}
                name="empid"
              ></input>
            </div>
            {valempid ? (
              <div></div>
            ) : (
              <div style={{ size: 10, color: "red", align: "center" }}>
                Enter Valid Employee ID
              </div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Employee Name</label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                placeholder="Enter Employee Name"
              ></input>
            </div>
            {valname ? (
              <div></div>
            ) : (
              <div style={{ size: 10, color: "red", align: "center" }}>
                Enter Name Greater than 3 letters
              </div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Hourly Rate</label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Hourly Rate"
                onChange={handleChange}
                name="rate"
              ></input>
            </div>
            {valrate ? (
              <div></div>
            ) : (
              <div style={{ size: 10, color: "red", align: "center" }}>
                Enter Positive Rate
              </div>
            )}
          </div>
          <SubmitButton handleSubmit={handleSubmit} />
        </form>
      </div>
    );
  }
}

export default form;
