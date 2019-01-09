import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

import POJO from './../../components/dumb/POJO';
import ResultsTable from './../../components/dumb/ResultsTable';

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
    this.props.fetchStories(selected);
    this.setState({
      selected: selected
    });
  }

  renderPOJO(){
      return (
          <POJO obj={this.props.data}/>
      );
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
        <Col md={12}>
            <p>Fetching: {this.props.fetching.toString()}</p>
            
            <div>
                Stories:
            </div>
            <div>
                {/* {this.props.data.length? this.renderPOJO() : null} */}
                {this.props.data.length > 0? <ResultsTable data={this.props.data}/> : null}
            </div>
        </Col>
      </Row>
    );
  }
}
