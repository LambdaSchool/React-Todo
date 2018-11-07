import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const dummyData = [
  {todo: 'Learn React'},
  {todo: 'Make Cool Websites'},
  {todo: 'Watch Cartoon'},
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: dummyData,
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
