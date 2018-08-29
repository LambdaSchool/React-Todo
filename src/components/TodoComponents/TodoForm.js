import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input placeholder='...todo' value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;