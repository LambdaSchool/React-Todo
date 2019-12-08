import React from "react";

import "./components/TodoComponents/Todo.css";

import { tasks } from "./data";
import TodoList from "./components/TodoComponents/TodoList";

// console.log(tasks);

// Main component
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  // strikethrough & reset functionality
  toggleTask = itemId => {
    console.log("DONE", itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
        </div>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
