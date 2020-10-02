import React from 'react'
import {useSelector} from 'react-redux'

export default function Total(){
    const task = useSelector(state => state.tasks.data);
    const total = useSelector(state => state.total);
    
    
        
return ( 
    <>
    <br></br>
    <span>Total Price:R$ {total} </span>
    </>
)
}
