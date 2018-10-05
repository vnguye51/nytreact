import React, { Component } from "react";
import FormBtn from '../Form/FormBtn'

class Article extends Component {
  handleFormSubmit = event => {
  };

  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

export default Article;
