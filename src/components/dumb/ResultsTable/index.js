import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap';

import TRow from 'Dumb/TRow';

import apiColumns from 'Utils/columns';



// these get fed the data to process if processor is not null, else just show data

console.log(apiColumns)


function ResultsTable(props) {
    const renderTH = (obj) => {
        const ths = [];
        let x;
        for (x in obj){
            if(!apiColumns[x].ignore){
                ths.push(<th key={ths.length}>{apiColumns[x].name}</th>)
            }
        }
        return ths;
    };
  return (
    <Table striped>
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

