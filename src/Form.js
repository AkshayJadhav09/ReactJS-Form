import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Modal } from 'react-bootstrap';

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
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

  render() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
      <div>
      <Button color="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>

        <form onSubmit={this.formSubmit}>

          <TextField id="name" type="text" defaultValue="" placeholder="Name..." />
          <br />
          <TextField id="email" type="text" defaultValue="" placeholder="Email..." />
          <br />
          <TextField id="phone" type="number" defaultValue="" placeholder="Phone Number" />
          <br />
          <br />
          <Button type="submit" value="submit" variant="contained" color="primary"> Submit </Button>

        </form>
      </Modal>
      </div>
      </>
    );
  }
}

export default Form;
