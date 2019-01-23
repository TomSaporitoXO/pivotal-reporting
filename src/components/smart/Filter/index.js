import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

import POJO from "Dumb/POJO";
import ResultsTable from "Dumb/ResultsTable";
import AppState from "Utils/state";

const pivotalStates = [
  "unscheduled",
  "unstarted",
  "planned",
  "started",
  "finished",
  "delivered",
  "rejected",
  "accepted"
];

export default class Custom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  selectChanged(select) {
    const selected = [...select.options]
      .filter(option => option.selected)
      .map(option => option.value);
    this.setState({
      selected: selected
    });
  }

  fetchStoriesByState = cardStates => {
    const token = this.state.User.token;
    const projectId = "2188060";

    // compose request URL
    const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories?filter=state:${cardStates.map(
      s => s
    )}&limit=20`;
    AppState.emit("UPDATE_STATE", {
      "Custom.fetching": true
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
    }).then(response =>
      response.json().then(data => {
        AppState.emit("UPDATE_STATE", {
          "Custom.data": data,
          "Custom.fetching": false
        });
      })
    ); // parses response to JSON
  };

  renderPOJO() {
    return <POJO obj={this.props.data} />;
  }

  ph = e => console.log(e);

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <h2>Selected States:</h2>
          <ul>
            {this.state.selected.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <Form onSubmit={(e)=>this.handleSubmit(e)}>
            <Row>
              <Col sm={4} md={3}>
                <FormGroup>
                  <Label for="exampleSelectMulti">Card States:</Label>
                  <Input
                    onChange={e => this.ph(e)}
                    type="select"
                    name="selectMulti"
                    id="selectMulti"
                    multiple
                  >
                    {pivotalStates.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                 by label
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                 by X
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                 by Y
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary">
              Get Cards!
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
