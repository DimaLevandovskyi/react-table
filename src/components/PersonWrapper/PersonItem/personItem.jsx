import React from 'react'
import classes from './personItem.css'

export default function personItem(props) {
  let sortMass = [];
  props.types.forEach(type => {
    props.persons.forEach(person => {
      if (person.name === type.name) {
        sortMass.push(person)
      }
    });
  });
  return (
    <tr>
      {
        sortMass.map((person, index) =>{
          return(
            <td key={index} className={classes.td}>
              <input 
                className={classes.input} 
                type="text" 
                value={person.value} 
                name={person.name} 
                onChange={(e)=>{props.changePerson(person.name, props.index, e.target.value)}} 
              />
            </td>
          )
        })
      }
    </tr>
  )
}