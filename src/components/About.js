import React, { Component } from 'react';
import '../App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

export default class About extends Component {
  render() {
    return (
      <div className="about-area">
      <Card className="mt-4">
        <Card.Body className="card-body">
          <Card.Title className="text-center"><h1><i className="fas fa-info-circle 2x mr-3"></i>About.</h1></Card.Title>
          <Card.Text className="text-center ml-5 mr-5">
              <span className="about-span">Version</span> - v 1.0.0 <br/>
              <span className="about-span">Author</span> - Liyanage T.J.P.S. | IT17186766 <br/>
              <span className="about-span">Required</span> - Internet connection for load Font-awesome icons* <br/>
              <span className="about-span">Added modules</span> - uuid, React-bootstrap, React-router-dom <br/>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
}
}
