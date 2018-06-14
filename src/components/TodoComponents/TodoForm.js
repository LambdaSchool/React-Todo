import React from 'react';
import './Todo.css';



const TodoForm = (props) => {

        return (
            <div className='form-wrapper'>
               <form onSubmit = {props.addToDo}>
               <input onChange = {props.handleChange} className='todo-input' type='text' name = 'task' value={props.value} placeholder=' ready for blast-off...' /> 
               <div className='button-flex'>
               <button  onClick = {props.addToDo} className='add-todo'>Add Todo</button>
               <button onClick = {props.clearComplete} className='clear'>Clear Completed</button>
               </div>
               </form>
            </div>
        );
    }

export default TodoForm;
