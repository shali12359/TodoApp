import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class MyForm extends Component {
  render() {
    const { todo, addTodo, handleChange, editTodo } = this.props;

    return (
      <div className="my-form">
        <Form className="mt-5" onSubmit={ addTodo }>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-center mb-3"><h5><i className="fas fa-clipboard-list mr-3"></i>Add To-do.</h5></Form.Label>
            <Form.Control type="name" placeholder="Add your to-do from here..." value={ todo } onChange={ handleChange } required/>
          </Form.Group>
          <Button variant={ editTodo ? "outline-primary" : "outline-success" } type="submit" className="mt-3" block>
            {editTodo ? "Update To-do" : "Add To-do" }
          </Button>
        </Form>
      </div>
    );
  }
}
