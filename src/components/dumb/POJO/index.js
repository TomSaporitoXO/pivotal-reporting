import React from 'react'

function POJO(props) {
  return (
    <pre>
      <code>
          {JSON.stringify(props.obj, null, 4)}
      </code>
    </pre>
  )
}

export default POJO

