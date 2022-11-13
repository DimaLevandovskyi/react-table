import React from 'react'
import PersonItem from './personItem'

export default function personsWrapper(props) {
    return (
        <tbody>
            {
                props.persons.map((person, index) =>{
                    return(
                        <PersonItem key={index} person={person}/>
                    )
                })
            }
        </tbody>
    )
}
