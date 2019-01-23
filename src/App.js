import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import AppState from "Utils/state";
import UserForm from "Smart/UserForm";
import Header from "Dumb/Header";
import Tabs from 'Dumb/Tabs';


class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      User: {
        name: null,
        token: null
      }
    };

    AppState.on("STATE_UPDATED", ns => this.setState(ns));
  }


  render() {
    const { User } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Header User={User} />
          </Col>
          <Col>
            <UserForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
