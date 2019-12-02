import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props)
    this.state = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false,
      }
    ]
  }

  done = (e) => {
    e.preventDefault()
    this.setCompleted = true
    console.log(this.completed);
  }

  add = (e) => {
    e.preventDefault()
    const newTodo = {
      task: e.target.value,
      id: Date.now(),
      completed: false,
    }
    this.setState = {...this.state, newTodo}
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state} done={this.done} add={this.add}/>
      </div>
    );
  }
}

export default App;
