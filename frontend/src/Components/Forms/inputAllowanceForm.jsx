import React, { Component } from "react";

class Allowance extends Component {
    render() {
        const { handleChange } = this.props;
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Allowance</label>
          <div className="col-sm-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Allowances"
              onChange={handleChange}
              name="allowances"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default Allowance;
