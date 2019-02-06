import React, { Component } from 'react';
import {Col} from 'reactstrap';

import Filter from 'Smart/Filter';
import ResultsTable from 'Dumb/ResultsTable';

export default class Grid extends Component {

  render() {
    return (
      <div>
        <Filter filters={this.props.filters} epics={this.props.epics}/>
        <Col>
          {this.props.data.length} Stories
        </Col>
        <Col md={12}>
          <div>
            {this.props.data.length > 0 ? (
              <ResultsTable data={this.props.data} />
            ) : null}
          </div>
        </Col>
      </div>
    )
  }
}
