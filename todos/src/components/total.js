import React from 'react'
import {useSelector} from 'react-redux'

export default function Total(){
    const task = useSelector(state => state.todos.data);
    const total = useSelector(state => state.total);
    
    console.log('tasks:',task)

    console.log('total:',total)
        
return ( 
    <>
    <br></br>
    <span>Total Price:R$ {parseFloat(total)} </span>
    </>
)
}
