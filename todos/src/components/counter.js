import React from 'react'
import {useSelector} from 'react-redux';
export default function Counter(){

    const counter = useSelector(state => state.todos.data)

    return <span>You have {counter.length} tasks! </span>
}