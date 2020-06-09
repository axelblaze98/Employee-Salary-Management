import React, { Component } from 'react';

class Hours extends Component {
    render() { 
        const { handleChange } = this.props;
        return (<form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Working Hours</label>
            <div className="col-sm-4">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Working Hours"
                onChange={handleChange}
                name="hours"
              ></input>
            </div>
            </div>
          </form> );
    }
}
 
export default Hours;