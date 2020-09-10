import React from "react";
import "./App.css";
import List from "./components/List";
import Todo from "./AddTodo/addTodo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a id="header" class="navbar-brand text-uppercase" href="#">
            Todo App
          </a>

          <span className="my-2 my-lg-0">
            Hello there!!! What would you be doing today?
          </span>
        </nav>

        <Todo addTodoFn={this.addTodo} />
        <List updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }
  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };
  addTodo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };
  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(newTodos);
  };
}

export default App;
