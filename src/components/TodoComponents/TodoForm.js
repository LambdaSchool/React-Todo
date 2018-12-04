import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="inputField">
    <form>
      <input type="text" name="newItem" onKeyPress={(e) => {if (e.keyCode === 13) {props.addNewItem} } } onChange={props.formEventHandler} value={props.newItem} />
      <div className="formButtons">
        <input type="submit" onClick={props.addNewItem} value="Add To List" />
        <input type="button" value="Clear Complete" />
      </div>
      </form>
    </div>
  );
};

export default TodoForm;
