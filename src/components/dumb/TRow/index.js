import React from 'react'
import PropTypes from 'prop-types'

function TRow(props) {
    const renderTDs = ()=> {
        const tds = [];
        let v;
        for (v in props.row) {
            tds.push(<td key={tds.length}>{props.row[v].toString()}</td>);
        }
        return tds;
    }
  return (
    <tr>
      {renderTDs()}
    </tr>
  )
}

TRow.propTypes = {

}

export default TRow

