import React, { Component } from "react";

class Deductions extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Deduction</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Deductions"
              onChange={handleChange}
              name="deductions"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default Deductions;
