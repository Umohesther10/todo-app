import React, { Component } from "react";
import "./style.css";

export class todoItems extends Component {
  render() {
    const { todo } = this.props;

    return (
      <ul className="list-group">
        <li
          className={
            "list-group-item list-group-item-warning mb-3" +
            (todo.completed ? " completed" : "")
          }
          onClick={this.toggleTodo}
        >
          {" "}
          {todo.text}
        </li>
      </ul>
      // </div>
    );
  }
  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  };
}

export default todoItems;
