import React from 'react'
import { useState } from 'react';

import Todolist from './Todolist'



const App = () => {
    const [inputlist,setinputlist]=useState("")
    const [Items,setitems]=useState([])

    const itemevent=(event) =>{
        setinputlist(event.target.value);

    }

    const listofitems=() =>{
        setitems((olditems)=>{
            return [...olditems,inputlist ]
        });
        setinputlist("")

    }

    const delitems=(id)=>{
        setitems((olditems)=>{
            return olditems.filter((arrelem,index)=>{
                return index!==id

            })
        })
    }


    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br/>
                    <h1>To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Enter a item" onChange={itemevent} value={inputlist}/>
                    <button onClick={listofitems}> + </button>

                    <ol>
                        
                        {Items.map( (itemval,index) => {                          
                                return(
                                    <Todolist 
                                    val={itemval} 
                                    key={index} 
                                    id={index}
                                    onSelect={delitems}/>
                                )
                        })}
                    </ol>
                </div>

            </div>
        </>
    )

}

export default App;