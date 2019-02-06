import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "substate-connect";

import AppState from "Utils/state";
import UserForm from "Smart/UserForm";
import Grid from "Smart/Grid";
import Header from "Dumb/Header";
import { fetchLabelsAsync, fetchEpicsAsync, fetchStoriesAsync } from "Utils/api";

const WiredGrid = connect(
  AppState,
  {
    data: "Grid.data",
    filters: "Filters",
    epics: "Epics"
  }
)(Grid);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = AppState.getCurrentState();

    AppState.on("STATE_UPDATED", ns => this.setState(ns));
    AppState.on("STATE_UPDATED", ns => console.log('NEW STATE', ns , AppState));
    AppState.on("GOT_LABELS", ns => this.awaitLabel(ns.User.token));
    AppState.on("GOT_EPICS", ns => ns.GotAllData? null : this.awaitStories(ns.User.token, 0));
    AppState.on("STATE_UPDATED",  ns=>{
      if(!ns.GotAllData){
        setTimeout(()=>{
          this.awaitStories(ns.User.token, ns.offset) 
        },100)
      }
    });
  }

  awaitLabel = token => {
    (async () => {
      const result = await fetchEpicsAsync(token);
      AppState.emit("UPDATE_STATE", {
        $type: 'GOT_EPICS',
        "Filters.epics": result
      });
    })();
  };

  componentDidUpdate() {
    const state = this.state;
    if (state.LoggedIn && !state.Filters.fetched) {
      (async () => {
        const result = await fetchLabelsAsync(state.User.token);
        AppState.emit("UPDATE_STATE", {
          $type: "GOT_LABELS",
          "Filters.labels": result,
          'Filters.fetched': true,
        });
      })();
    }
  }


  awaitStories = (token, offset)=>{
    (async () => {
      const result = await fetchStoriesAsync(token, offset);
      const gotAll = result.length < 100? true : false;

      const data = AppState.getCurrentState().Grid.data.concat(result);
      AppState.emit("UPDATE_STATE", {
        'Grid.data': data,
        'GotAllData': gotAll,
        'offset': parseInt(AppState.getProp('offset') + 100)
      });
    })();
  }

  render() {
    const { User, LoggedIn } = this.state;
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
          <Col>{LoggedIn ? <WiredGrid /> : null}</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
