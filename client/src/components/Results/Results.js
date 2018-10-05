import React, { Component } from "react";

class Results extends Component {
  handleFormSubmit = event => {
  };
  
  render() {
    return (
        <div>
            <span>Search Results</span>
              {this.props.children}
        </div>
    );
  }
}

export default Results;
