import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList.js';
import ToDoForm from './components/TodoComponents/ToDoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ""
    };
  }

  addToDo = event => {
    event.preventDefault();

    this.setState({
      todos: [...this.state.todos, this.state.inputText]
    });
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
     <div>
      <ToDoList todos={this.state.todos} />
      <ToDoForm
        addUser={this.addToDo}
        inputText={this.state.inputText}
        handleInput={this.handleInput}
      />
     </div>
    );
  }
}

export default App;
