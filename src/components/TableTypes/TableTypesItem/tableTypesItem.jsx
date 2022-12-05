import React from 'react'
import classes from './tableTypesItem.css'
// import Select from 'react-select'

export default function tableTypes(props) {
  // let options = []

  // props.options.forEach(personArr =>{
  //   personArr.person.forEach(person =>{
  //     if (props.type.name === person.name) {
  //       options.push({value: person.value, label:person.value})
  //     }
  //   })
  // })

  return (
    <th className={classes.th}>
      <div className={classes.titleTypes}>{props.type.name}</div>
      <input className={classes.input} type="text" placeholder={props.type.name} onChange={(e)=>{props.sortRow(props.type.name, e.target.value)}} />
      {/* <Select
        options={options}
      /> */}
    </th>
  )
}
