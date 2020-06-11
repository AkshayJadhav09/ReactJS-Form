import React, { Component, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from './Modal'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      name: null,
      email: null,
      phone: null,
      errors: {
        name: '',
        email: '',
        phone: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name =
          value.length < 5
            ? 'Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'phone':
        errors.phone =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors)
    })
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements["email"].value;
    const name = form.elements["name"].value;
    const phone = form.elements["phone"].value;
    this.props.addPerson(name, email, phone);
    form.reset();
  }

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {

    return (
      <div>
        <Modal />
        <form onSubmit={this.formSubmit}>

          <TextField onChange={this.handleChange} id="name" type="text" defaultValue="" placeholder="Name..." />
          <br />
          <TextField onChange={this.handleChange} id="email" type="text" defaultValue="" placeholder="Email..." />
          <br />
          <TextField onChange={this.handleChange} id="phone" type="number" defaultValue="" placeholder="Phone Number" />
          <br />
          <br />
          <Button type="submit" value="submit" variant="contained" color="primary" onSubmit={this.handleChange}> Submit </Button>

        </form>

      </div>
    );

  }

}



export default Form;

