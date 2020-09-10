import React, { Component } from "react";

const addTodoContainer = {
  margin: 0,
};
const toDo = {
  marginTop: "10px",
};
export class addTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };
  }
  render() {
    return (
      <div style={addTodoContainer}>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              style={toDo}
              id="addTodoInput"
              onChange={(e) => this.updateInput(e)}
              placeholder="Enter To do"
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-warning btn-lg btn-block">
            Add Todo{" "}
          </button>
        </form>
      </div>
    );
  }
  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    const inputValue = document.getElementById("addTodoInput");
    inputValue.value = "";
  };
}

export default addTodo;
