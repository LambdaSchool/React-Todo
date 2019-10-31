import React from "react";
import "../src/components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
// import TodoSearch from "./components/TodoComponents/TodoSearch";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    const todoItems = JSON.parse(localStorage.getItem("tasks"));
    this.state = {
      todo: todoItems ? todoItems : ""
      //Todo Array
    }; //State
  }

  componentDidMount() {
    // const date = localStorage.getItem("tasksDate");
    // const tasksDate = date && new Date(parseInt(date));
    // const now = new Date();
    // const taskAge = Math.round((now - tasksDate) / (1000 * 60));
    // const procratinating = taskAge >= 1;
    // if (procratinating) {
    //   console.log("GET IT DONE");
    //   this.isProcrastinating = true;
    // }
    // console.log(now);
    // console.log(tasksDate);
    // console.log(taskAge);
  } //Component Did Mount

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasks", JSON.stringify(nextState.todo));
    localStorage.setItem("tasksDate", Date.now());

    console.log(nextProps);
  } //Component Will Update

  addTask = todoItem => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: todoItem,
          id: Date.now(),
          complete: false,
          isProcrastinating: false
        }
      ]
    });
  };

  toggleComplete = taskID => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === taskID)
          return {
            ...task,
            complete: !task.complete
          };
        return task;
      })
    });
  };

  clearComplete = () => {
    console.log(`you clicked clear`);
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.complete;
      })
    });
  };

  render() {
    // console.log(`${this.state.todo.task}`);
    return (
      <div className="app">
        <h2>Are You Done?</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todo={this.state.todo}
          clearComplete={this.clearComplete}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
