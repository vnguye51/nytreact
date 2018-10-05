import React, { Component } from "react";
import FormBtn from '../Form/FormBtn'

class Article extends Component {
  handleFormSubmit = event => {
  };

  render() {
    return (
        <div>
            {this.props.children}
            <FormBtn>{this.props.btnType}</FormBtn> 
        </div>
    );
  }
}

export default Article;
