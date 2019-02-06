import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

import AppState from "Utils/state";

export default class Custom extends React.Component {

  selectChanged(select, name) {
    const selected = [...select.options]
      .filter(option => option.selected)
      .map(option => option.value);

      const key = `AppliedFilters[${name}]`;
      AppState.emit('UPDATE_STATE', {
        [key]: selected
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    const { filters } = this.props;
    return (
      <Row>
        <Col md={12}>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Row>
              <Col sm={4} md={3}>
                <FormGroup>
                  <Label for="exampleSelectMulti">By Card States:</Label>
                  <Input
                    onChange={e => this.selectChanged(e.target, "states")}
                    type="select"
                    name="selectMulti"
                    id="selectMulti"
                    multiple
                  >
                    {filters.state.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                  <Label for="exampleSelectMulti">By Labels:</Label>
                  <Input
                    onChange={e => this.selectChanged(e.target, "label")}
                    type="select"
                    name="selectMulti"
                    id="selectMulti"
                    multiple
                  >
                    {filters.labels.map((v, i) => (
                      <option key={i} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                  <Label for="epicSelect">By Epic:</Label>
                  <Input
                    onChange={e => this.selected(e.target, "epic")}
                    type="select"
                    name="epicSelect"
                    id="epicSelect"
                    multiple
                  >
                    {filters.epics.map((v, i) => (
                      <option key={i} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
                <FormGroup>
                  <Label for="pointSelect">By Point:</Label>
                  <Input
                    onChange={e => this.selected(e.target, "point")}
                    type="select"
                    name="pointSelect"
                    id="pointSelect"
                    multiple
                  >
                    {filters.points.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={4} md={3}>
              <FormGroup>
                 <Label for="storyType">By Story Kind:</Label>
                  <Input
                    onChange={e => this.selected(e.target, 'kind')}
                    type="select"
                    name="story Kind"
                    id="story Kind"
                    multiple
                  >
                    {filters.kind.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary">Filter Cards!</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
