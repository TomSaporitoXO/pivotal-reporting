import React, { Component } from 'react';
import {Col} from 'reactstrap';

import Filter from 'Smart/Filter';

export default class Grid extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
          hello
        <Filter filters={this.props.filters}/>
        <Col md={12}>
          {/* <p>Fetching: {this.props.fetching.toString()}</p> */}

          {/* <div>Stories:</div> */}
          <div>
            {this.props.data.length > 0? this.renderPOJO() : null}
            {/* {this.props.data.length > 0 ? (
              <ResultsTable data={this.props.data} />
            ) : null} */}
          </div>
        </Col>
      </div>
    )
  }
}
