import React from 'react'
import classes from '../personItem.css'

export default function addNewPerson(props) {
    return (
        <tr>
            {
                [...Array(props.lenght)].map( (test, index) =>{
                    return(
                        <td key={index} className={classes.td}>
                            <input className={classes.input} type="text" readOnly value='' />
                        </td>
                    )
                })
            }
        </tr>
    )
}
