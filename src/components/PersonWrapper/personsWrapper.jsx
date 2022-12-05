import React from 'react'
import PersonItem from './PersonItem/personItem'
import AddNewPerson from './PersonItem/AddNewPerson/addNewPerson.jsx'

export default function personsWrapper(props) {
    return (
        <tbody>
            {
                props.persons.map((person, index) =>{
                    return(
                        person.filter === 'all' 
                        ? <PersonItem 
                            key={index} 
                            index={index} 
                            persons={person.person} 
                            types={props.types} 
                            changePerson={props.changePerson}
                          />
                        : null
                    )
                })
            }
            <AddNewPerson changePerson={props.changePerson} lenght={props.lenght}/>
        </tbody>
    )
}
