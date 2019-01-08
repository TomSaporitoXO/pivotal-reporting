import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

import POJO from './../../components/dumb/POJO';

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
    this.props.fetchStories();
    this.setState({
      selected: [...select.options]
        .filter(option => option.selected)
        .map(option => option.value)
    });
  }

  renderPOJO(){
      return (
          <POJO obj={this.props.data}/>
      );
  }

  render() {
      console.log(this.props)
    return (
      <Row>
        <Col md={3}>
          <h2>Selected States:</h2>
          <ul>
            {this.state.selected.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <Form>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                onChange={e => this.selectChanged(e.target)}
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {pivotalStates.map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Form>
        </Col>
        <Col md={9}>
            <p>Fetching: {this.props.fetching.toString()}</p>
            
            <div>
                Stories:
            </div>
            <div>
                {this.props.data.length? this.renderPOJO() : null}
            </div>
        </Col>
      </Row>
    );
  }
}
