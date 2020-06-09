import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const {isOpen, isClicked } = this.props;
    const menuClass = `dropdown-menu${isOpen.isActive ? " show" : ""}`;
    return (
      <div className="btn-group dropleft">
        <button
          onClick={()=>isClicked(0)}
          className="btn btn-info dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Field
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenu2">
          <button
            className="dropdown-item"
            name="bt1"
            type="button"
            onClick={()=>isClicked(1)}
          >
            Number of Hours
          </button>
          <button
            className="dropdown-item"
            name="bt2"
            type="button"
            onClick={()=>isClicked(2)}
          >
            Allowances
          </button>
          <button
            className="dropdown-item"
            name="bt3"
            type="button"
            onClick={()=>isClicked(3)}
          >
            Deductions
          </button>
        </div>
      </div>
    );
  }
}

export default Dropdown;
