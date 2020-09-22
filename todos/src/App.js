import React from 'react';
import {useState} from 'react';
import TaskInput from './TaskInput';



export default function App() {
  const [todos, settodos] = useState([]); 
  
  //FAZ UMA CÓPIA DO ARRAY NO ESTADO ATUAL;
  //RECEBE COMO PARÂMETRO O VALOR PASSADO NO EVENTO ONSUBMIT DO COMPONENTE 'TaskInput' E INSERE NO ARRAY;
  //ATUALIZA O ESTADO COM O NOVO ARRAY JÁ COM O NOVO OBJETO INSERIDO NELE

  function handleChange(task){
    const copy = Array.from(todos);
    copy.push({id:todos.length, text:task});
    settodos(copy);
    
  }
  return (
    <>
    <div className="App">
      <h1>lista de tarefas</h1>
      {console.log(...todos)}
      <ul>
        {todos.map(todo=> (
          
          <li key={todo.id}>{todo.text}</li>
        )) }
        
      </ul>
       <TaskInput onSubmit={handleChange}/>
    </div>
    <br></br>
        <h4>Você tem {todos.length} tarefas</h4>
    </>
  );
}


