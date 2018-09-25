import React from 'react';
import './Todo.css';




export class TodoForm extends React.Component {
constructor(){

super()

   this.state = {
    value: ""
}


  }
handleChange = (e) => {
    this.setState({value: e.target.value})
}

    addTodo = (todo) => {
        //Verify there is something  in our todo input
       if (todo.length > 0 ){
           this.props.addTodo(todo)
           this.setState({value: ''})
       }
    }

    render() {
        return (

            <div>
                
                    <input value={this.state.value} onChange={this.handleChange} placeholder="Enter your task" />{" "}
                    <button className= "btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Add Todo</button>{" "}
                    <button>Clear From Form</button>
            
            </div>


        )
    }
}
// export const TodoButton = (props) => {
//     return (

//         <button className={props.buttonStyle} onClick={() => props.handleClick(props.items)} >{props.text}</button>

//     )
// }

// export const TodoInput = () => {
//     return (
//         <input onChange= {props.handleChange}></input>
//     )
// }