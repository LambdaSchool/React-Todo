import React from 'react';

function Todo(props) {
    return(
       <li onClick={props.finishItem}>{props.item.task}</li> 
    );
};

export default Todo;