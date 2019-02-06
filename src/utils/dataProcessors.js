import React, { Component } from 'react';
import moment from 'moment';

export const createDate = (time) => time? new moment(time) : 'N/A';


// get urls to work
class A extends Component{
    render(){
        return(
            <a href={this.props.string}>{this.props.string}</a>
        );
    }
}

export const createURL = string => {
    return [string].map(s=> <A string={s}/>)
};