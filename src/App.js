import React from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodoBar from "./components/AddTodoBar";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        } //This is the toggle for moving the items from ToDo to Done List
        return todo;
      }),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: [],
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    console.log(this.state.todos);
  };


  render() {
    return (
      <div className="text-center row ">
        <div className="col-md-12 justify-items-center">
          <AddTodoBar addTodo={this.addTodo}></AddTodoBar>
        </div>
        <div className="col-md-8">
          <Header></Header>
          <Todos
            todos={this.state.todos.filter((todo) => !todo.completed)}
            toggleComplete={this.toggleComplete}
          ></Todos>
        </div>
        <div className="col-md-8">
          <h1>Done</h1>
          <Todos
            todos={this.state.todos.filter((todo) => todo.completed)}
            toggleComplete={this.toggleComplete}
          ></Todos>
        </div>
      </div>
    );
  }
}

export default App;
