import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './Todos';

import ListGroup from 'react-bootstrap/ListGroup';

export default class MyList extends Component {
  render() {
    const { todos, deleteTodo, updateTodo, changeCompleted } = this.props;

    return (
      <div className="my-list">
        <ListGroup className="mt-5 display-container" as="ul">
          <h5><i className="fas fa-list mr-3 "></i>Your To-do List..</h5>
          {
            todos.map(todo => {
              return <Todos key={ todo.id } title={ todo.title } completed={ todo.completed } changeCompleted={ ()=> changeCompleted(todo.id) } deleteTodo={ ()=> deleteTodo(todo.id)} updateTodo={ ()=> updateTodo(todo.id) } />;
            })
          }
        </ListGroup>
      </div>
    );
  }
}
