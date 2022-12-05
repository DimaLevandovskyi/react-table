import React from 'react'
import TableTypesItem from "./TableTypesItem/tableTypesItem";
import classes from "./TableTypesItem/tableTypesItem.css";

export default function tableTypes(props) {
    
    return (
        <thead>
            <tr>
                {
                    props.types.map((type,index) =>{
                        return(
                            <TableTypesItem 
                                options={props.persons} 
                                key={index} 
                                type={type} 
                                sortRow={props.sortRow} 
                            />
                        )
                    })
                }
                <th>
                    <button className={classes.button} onClick={props.showPopup}>+</button>
                </th>
            </tr>
        </thead>
    )
}
