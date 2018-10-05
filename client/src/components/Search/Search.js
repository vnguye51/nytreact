import React, { Component } from "react";
import FormBtn from '../Form/FormBtn'
import Input from '../Form/Input'
class Search extends Component {

  render() {
    return (
        <div>
            <div>Search</div>
            <div>Topic</div>
            <Input name='query' onChange={this.props.handleInputChange}></Input>
            <div>Start Year</div>
            <Input name='start' onChange={this.props.handleInputChange}></Input>
            <div>End Year</div>
            <Input name='end' onChange={this.props.handleInputChange}></Input>
            <FormBtn onClick={this.props.handleFormSubmit}>Search</FormBtn>
        </div>
    );
  }
}

export default Search;
