import React from 'react'

const Todolist=(props)=>{

    

    return (
        <>
            <div className="todo_style">
                <i className="fa-times"  
                onClick={()=>{
                    props.onSelect(props.id)
                }}>x</i>
                <li>{props.val}</li>
            </div>
            
        </>)

}

export default Todolist