import React from 'react';
import Counter from './components/counter'
import Total from './components/total'
import TaskList from './components/TaskList';




export default function App() {
   
  return (
    <>
    <TaskList/>
    <br></br>  
    <Counter/>
    <Total/>
    </>  
    );
}


