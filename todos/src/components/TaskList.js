import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, deleteTask} from '../actions/tasks';

export default function TaskList(){
    const [todos, setTodo] = useState('');
    const [taskPrice, setPrice] = useState(0);
    const tasksStore = useSelector(state => state.tasks.data) 
    
    
    const dispatch = useDispatch();

    function handleDelete(id){
        const newStore = tasksStore.filter(elem => elem.id !== id )
        const filteredTask = tasksStore.filter(elem => elem.id === id)
        const price = filteredTask[0].payment
        
        dispatch(deleteTask(newStore, price))
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(addTask(todos, taskPrice));

        setTodo('');
        setPrice(0);
    }

    return(
        <div>
        
       
            <ul>{tasksStore.length !== 0 ? tasksStore.map(task => 
                <li key={task.id}>{task.text}  R${task.payment} 
                
                <button onClick={() => handleDelete(task.id)}> delete</button>
                
                </li>
            
                )
                : 
                
                    <li></li>
                
                    
            }
                
            </ul>  
            

            <form >
                <input type='text'
                        value={todos}
                        onChange={event => setTodo(event.target.value)}
                        placeholder='Add a task'
                />
                <input type='number'
                        step='0.01'
                        value={taskPrice}
                        onChange={event => setPrice(event.target.value)}
                        placeholder='Choose a price'
                />
                <button type='submit' onClick={handleSubmit}>Add</button>
            </form>
        
        </div>
    )
}