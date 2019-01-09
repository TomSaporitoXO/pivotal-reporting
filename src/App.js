import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from 'classnames';
import { connect } from 'substate-connect';

import Custom from './views/Custom';
import AppState from './utils/state';

const fetchStoriesByState = (states) => {
  const token = "fdb878f27aeec03fe5d03392d359602f";
  const projectId = "2188060";
  console.log(states)

  // compose request URL
  const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories?filter=state:${states.map(s =>s)}&limit=20`;
  AppState.emit('UPDATE_STATE', {
    'Custom.fetching': true,
  });

  fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-TrackerToken": token
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  }).then(response => response.json().then( data => {
    AppState.emit('UPDATE_STATE', 
    {
      'Custom.data': data,
      'Custom.fetching': false,
    });
    })
  ); // parses response to JSON
}
const WiredCustom = connect(AppState, {fetching: 'Custom.fetching', data: 'Custom.data'})(Custom);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "3"
    };

    AppState.on('STATE_UPDATED', (ns)=>this.setState(ns));
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Unaccepted
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Custom
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                All
              </TabPane>
              <TabPane tabId="2">
                Unaccepted
              </TabPane><TabPane tabId="3">
                  <WiredCustom fetchStories={fetchStoriesByState} />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
