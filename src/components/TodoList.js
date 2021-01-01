// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
//- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log("Props", props)
      return (
        <div>
            {/* <Todo />           */}
        </div>
      )
    }


export default TodoList;

