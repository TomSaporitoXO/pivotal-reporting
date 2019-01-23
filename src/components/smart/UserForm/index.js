import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import Tokens from './../../../utils/tokens';
import AppState from './../../../utils/state';

export default class UserForm extends Component {
  static propTypes = {
    prop: PropTypes
  }

  changeUser = (val) =>{
    AppState.emit('UPDATE_STATE', {
        User: {
            name: val,
            token: Tokens[val]
        }
    });
  }

  render() {
    return (
      <FormGroup>
        <Label for="exampleSelect">Choose User:</Label>
        <Input type="select" name="select" onChange={(e) => this.changeUser(e.target.value)}>
            <option value="">select a user</option>
          {Object.keys(Tokens).map((key, i)=>{
            return (
              <option key={i} value={key}>{key}</option>
            );
          })}
        </Input>
      </FormGroup>
    )
  }
}