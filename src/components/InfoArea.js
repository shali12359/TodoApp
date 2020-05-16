import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

export default class InfoArea extends Component {
  render() {
    return (
      <div className="info-area">
      <Card className="mt-4">
        <Card.Body className="card-body">
          <Card.Title className="text-center"><h1><i className="fas fa-clipboard-list 2x mr-3"></i>My To-do App.</h1></Card.Title>
          <Card.Text className="text-center ml-5 mr-5">
            Manage your day with My To-do App.
            It is simple & easy to use. You can add new to-dos.
            Update your to-dos as you want ( <i className="fas fa-marker mr-1"/>).
            Mark them as Completed or nor by clicking icon ( <i className="fas fa-clipboard-list mr-1"/> / <i className="fas fa-clipboard-check mr-1"/>).
            Also you can delete to-dos.. ( <i className="fas fa-trash-alt mr-1"/>)
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}
