import React, { Component } from "react";
import FormComponent from "./FormComponent";
class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    isVegan: false,
    isKosher: false,
    isLactoseFree: false,
  };
  //! Removing constructor
  /*
  
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
  }

*/
  //! with Arrow function I dont need to bind the function
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default Form;
