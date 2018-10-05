import React, { Component } from "react";
import Article from '../Article/article'
import FormBtn from '../Form/FormBtn'

class Saved  extends Component {
  handleFormSubmit = event => {
  };

  render() {
    return (
        <div>
            <span>Saved Articles</span>
            {this.props.children}
        </div>
    );
  }
}

export default Saved;
