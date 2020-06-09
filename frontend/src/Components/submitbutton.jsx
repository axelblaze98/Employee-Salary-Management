import React, { Component } from "react";

class Submit extends Component {
  state = {};
    render() {
        const { handleSubmit } = this.props;
    return (
      <button className="btn btn-primary" onClick={handleSubmit} type="submit">
        Submit
      </button>
    );
  }
}

export default Submit;
