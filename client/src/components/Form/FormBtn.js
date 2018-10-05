import React, { Component } from "react";

class FormBtn extends Component {

  render() {
    return (
        <div>
            <button {...this.props}>
                {this.props.children}
            </button>
        </div>
    );
  }
}

export default FormBtn;
