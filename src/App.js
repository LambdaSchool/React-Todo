'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define initial state
 */

const initialState = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

/**
 * Define component
 */

class App extends Component {
  constructor() {
    super()
    this.state = { todo: initialState }
    localStorage.setItem('todo', JSON.stringify(this.state.todo))
  }

  addTask = (task) => {
    this.setState({todo: [...this.state.todo, {
      task: task,
      id: new Date(),
      completed: false
    }]})
  }

  toggleCompleted = id => {
    this.setState(prevState => {
      prevState.todo = prevState.todo.map(t => {
        if (t.id === id) { t.completed = !t.completed }
        return t
      })

      return prevState
    })
  }

  clearCompletedTasks = () => {
    this.setState(prevState => ({ todo: prevState.todo.filter(t => !t.completed) }))
  }

  loadStateWithLocalStorage = () => {
    let todo_ids = this.state.todo.map(todo => todo.id)

    let storedTodo = JSON.parse(localStorage.getItem('todo'))

    let oldTodo = storedTodo.filter(todo => (!todo_ids.includes(todo.id)))

    this.setState(prevState => ({ todo: [...prevState.todo, ...oldTodo] }))
  }

  componentDidMount() {
    this.loadStateWithLocalStorage()
  }

  render() {
    return (
      <div className="jsx-App">
        <h2>Todo List: MVP</h2>
        <components.TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
        <components.TodoForm addTask={this.addTask} clearCompletedTasks={this.clearCompletedTasks} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
