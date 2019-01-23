import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from 'substate-connect';

import AppState from "Utils/state";
import UserForm from "Smart/UserForm";
import Grid from 'Smart/Grid';
import Header from "Dumb/Header";

const WiredGrid = connect(AppState, {
  data: 'cards',
})(Grid);

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
          <Col sm={9}>
            <Header User={User} />
          </Col>
          <Col sm={3}>
            <UserForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <Grid />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
