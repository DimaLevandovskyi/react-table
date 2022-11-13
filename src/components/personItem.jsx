import React from 'react'

export default function personItem(props) {
  return (
    <tr>
        <td>{props.person.first_name}</td>
        <td>{props.person.last_name}</td>
        <td>{props.person.age}</td>
        <td>{props.person.status}</td>
        <td>{props.person.city}</td>
    </tr>
  )
}