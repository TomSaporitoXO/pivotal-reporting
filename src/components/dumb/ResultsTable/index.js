import React from 'react'
import {Table} from 'reactstrap';

import TRow from 'Dumb/TRow';

import apiColumns from 'Utils/columns';



// these get fed the data to process if processor is not null, else just show data




function ResultsTable(props) {
    const renderTH = (obj) => {
        const ths = [];
        const keys = Object.keys(apiColumns);
        for (let i = 0; i <keys.length; i++){
            if(obj[keys[i]]){
                if(!apiColumns[keys[i]].ignore){
                    ths.push(<th key={ths.length}>{apiColumns[keys[i]].name}</th>)
                }
            }
        }
        return ths;
    };

    const renderTDs = (obj) =>{
        const tds =[];
        const keys = Object.keys(apiColumns);
        for (let i = 0; i <keys.length; i++){
            if(obj[keys[i]]){
                if(!apiColumns[keys[i]].ignore){
                    tds.push(<td key={tds.length}>{apiColumns[]}</td>)
                }
            }
        }
        return tds;
    }
  return (
    <Table striped>
        <thead>
            <tr>
                {renderTH(props.data[0])}
            </tr>
        </thead>
        <tbody>
            {props.data.map((d,i)=> {
                return(
                    <tr key={i}>
                        {renderTDs(d)}
                    </tr>
                );
            })}
        </tbody>
    </Table>
  )
}

export default ResultsTable

