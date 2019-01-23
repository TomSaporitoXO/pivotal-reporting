import React from 'react'

export default function Header(props) {
    const { User } = props;

  return (
    <div>
        <h1>Pivotal Reporting {User.name? `for ${User.name}` : '' }</h1>
        <small><strong>Token: </strong>{User.token}</small>
    </div>
  )
}
