import React, { Component } from "react";

class FormBtn extends Component {

  render() {
    return (
        <div>
            <input {...this.props} />
        </div>
    );
  }
}

export default FormBtn;
