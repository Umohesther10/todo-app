import React, { Component } from "react";
import Item from "./TodoItem/Items";

export class todoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todoListContainer">
        <h3 className="mt-5 text-center">Things to do </h3>
        {todos.map((_todo, _index) => {
          return (
            <div>
              <Item updateTodoFn={this.updateTodo} key={_index} todo={_todo}>
                {" "}
              </Item>
            </div>
          );
        })}
      </div>
    );
  }
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo);
  };
}

export default todoList;
