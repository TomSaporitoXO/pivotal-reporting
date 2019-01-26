import React from 'react';
import moment from 'moment';

export const createDate = (time) => time? new moment(time) : 'N/A';


// get urls to work
const A = (props) => <a href={`${props.string}`}>Go To Story</a>
export const createURL = string => <A string={string}/>;