import React from 'react'
import apiColumns from 'Utils/columns';

function TRow(props) {
    const renderTDs = ()=> {
        const tds = [];
        const {row} = props;
        let x;
        for (x in row){
            // some rows have data and keys that others dont have;
            if(apiColumns[x]){
                if(!apiColumns[x].ignore){
                  if(apiColumns[x].processor){
                    tds.push(<td key={tds.length}>{apiColumns[x].process(row[x]).toString()}</td>)
                  } else {
                    tds.push(<td key={tds.length}>{row[x].toString()}</td>)
                  }
                }
            }
        }
       
        return tds;
    }
  return (
    <tr>
      {renderTDs()}
    </tr>
  )
}



export default TRow

