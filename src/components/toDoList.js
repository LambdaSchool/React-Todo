import React, { Component } from 'react';

// require('!style-loader!css-loader!sass-loader!./index.scss');


class ToDoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArray: [`pay bills`, `wash car`, `brush teeth`, `take shower`, `mend fence`, `solve rubik’s cube`, `polish My Little Pony statues`]
    };
  }
  render() {
    console.log('FLAMING MUTANT HUMAN HAMSTERS');
    alert('POOP MONKEYS');
    return (
      <div>
        <ul>
          <li>{ this.state.toDoArray[0] }</li>
          <li>{ this.props.myProp }</li>
          <li>{ this.state.toDoArray[1] }</li>
          <li>{ this.state.toDoArray[2] }</li>
          <li>{ this.state.toDoArray[3] }</li>
          <li>{ this.state.toDoArray[4] }</li>
          <li>{ this.state.toDoArray[5] }</li>
          <li>{ this.state.toDoArray[6] }</li>
        </ul>
      </div>
    )
  }
};

export default ToDoClass;
