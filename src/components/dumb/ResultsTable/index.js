import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap';

import TRow from './../TRow';

function ResultsTable(props) {
    const renderTH = (obj) => {
        const ths = [];
        let x;
        for (x in obj){
            ths.push(<th key={ths.length}>{x.toString()}</th>)
        }
        return ths;
    };
  return (
    <Table>
        <thead>
            <tr>
                {renderTH(props.data[0])}
            </tr>
        </thead>
        <tbody>
            {props.data.map((d,i)=> <TRow key={i} row={d}/>)}
        </tbody>
    </Table>
  )
}

ResultsTable.propTypes = {

}

export default ResultsTable

