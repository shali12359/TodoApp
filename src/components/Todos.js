import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';

export default class Todos extends Component {
  // Cross completed todos
  styleTodo = () => {
    return { textDecoration: 'line-through'}
  }

  // Change complete icon
  markComplete = () => {
    return  "fas fa-clipboard-check mr-3 complete-icon"
  }

  // Change incomplete icon
  markIncomplete = () => {
    return  "fas fa-clipboard-list mr-3 complete-icon"
  }

  render() {
    const { id, title, completed, deleteTodo, updateTodo, changeCompleted } = this.props;

    return (
      <ListGroup.Item as="li"> <i className={ (completed==true) ? this.markComplete() : this.markIncomplete() } onClick={ changeCompleted }/><span style={ (completed==true) ? this.styleTodo() : {} }>{ title }</span><i className="fas fa-trash-alt mr-3 float-right delete-icon"  onClick={ deleteTodo } /><i className="fas fa-marker mr-3  float-right edit-icon" onClick={ updateTodo } /></ListGroup.Item>
    );
  }
}
