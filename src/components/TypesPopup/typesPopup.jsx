import React from 'react'
import classes from "./typesPopup.css";

export default function typesPopup(props) {
  return (
    <div className={classes.typesPopup}>
        <button className={classes.closePopup} onClick={props.showPopup}>x</button>
        <div className={classes.titleTypes}>Add/Change and move types</div>
        {
            props.types.map((type,index) =>{
                return(
                    <div 
                        key={index} 
                        className={classes.inputBlock} 
                        draggable={true} 
                        onDragOver={(e) =>{props.onDragOver(e)}} 
                        onDragStart={(e)=>{props.onDragStart(e,type)}} 
                        onDrop={(e)=>{props.dragDrop(e, type)}}
                    >
                        <input 
                            onChange={(e)=>{props.changeType(type.id, e.target.value)}} 
                            className={classes.type} 
                            type="text" 
                            value={type.name}
                        />
                        <button onClick={()=>(props.removeType(index))} className={classes.remove}>X</button>
                    </div>
                )
            })
        }
        <button onClick={props.addType} className={classes.button}>Add new type</button>
    </div>
  )
}
