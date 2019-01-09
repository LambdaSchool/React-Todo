// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Fragment } from 'react';
import ToDo from './Todo';
import ToDoForm from './TodoForm';

const ToDoList = props => {
  return (
    <Fragment>
      <ToDo list={props.list} />
      <ToDoForm submitForm={props.submitForm} />
    </Fragment>
  );
};

export default ToDoList;
