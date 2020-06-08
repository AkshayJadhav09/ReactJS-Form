import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Form from "./Form";
//import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import "./styles.css";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(name, email, phone) {
    this.setState(prevState => ({
      people: [...prevState.people, { name, email, phone }]
    }));
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ people: response }))
      .catch(error => console.log(error));
  }

  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>LP</TableCell>
              <TableCell>USER</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.people.map((person, index) => {
              return (
                <TableRow key={person.email}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>{person.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary" onClick={this.deletePerson(person.email)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </div>
    );
  }
}

export default App;
