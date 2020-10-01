import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../actions/todos';

export default function TodoList(){
    const [todos, setTodo] = useState('');
    const [taskPrice, setPrice] = useState(0);
    const todosStore = useSelector(state => state.todos.data) 
    
    
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        dispatch(addTodo(todos, taskPrice));

        setTodo('');
        setPrice(0);
    }

    return(
        <div>
            <ul>{todosStore.map(todo => 
                <li key={todo.id}>{todo.text}  R${todo.payment}</li>
            
                )
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