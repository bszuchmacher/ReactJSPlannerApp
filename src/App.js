import React from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodoBar from "./components/AddTodoBar";
import Reset from "./components/Reset";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      todos: [
        {
          id: uuid(),
          title: "Fight with Wife",
          completed: false,
          date: new Date()
        },
        {
          id: uuid(),
          title: "Get a good internship",
          completed: false,
          date: new Date()
        },
        {
          id: uuid(),
          title: "Yell at Kids",
          completed: false,
          date: new Date()
        },
        {
          id: uuid(),
          title: "With Life",
          completed: true,
          date: new Date()
        },
      ],
    };
  }

  handleDoneInputEdit(title) {
		const completedItems = this.state.completedItems;
	
		completedItems.map((item) => {
		  if (item.title === title) {
		this.state.title = title;
		  }
		});
		this.setState({ completedItems: completedItems });
	  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
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

  refreshPage = () => {
    this.setState({ todos: [
      {
        id: uuid(),
        title: "Fight with Wife",
        completed: false,
        date: new Date()
      },
      {
        id: uuid(),
        title: "Get a good internship",
        completed: false,
        date: new Date()
      },
      {
        id: uuid(),
        title: "Yell at Kids",
        completed: false,
        date: new Date()
      },
      {
        id: uuid(),
        title: "With Life",
        completed: true,
        date: new Date()
      },
    ] });
  };


  render() {
    return (
      <div className="text-center row">
        <div className="col-md-12 justify-items-center">
          <AddTodoBar addTodo={this.addTodo}></AddTodoBar>
          <Reset refreshPage={this.refreshPage}></Reset>
        </div>
        <div className="col-md-6">
          <Header></Header>
          <Todos
            todos={this.state.todos.filter((todo) => !todo.completed)}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          ></Todos>
        </div>
        <div className="col-md-6">
          <h1>Done</h1>
          <Todos
            todos={this.state.todos.filter((todo) => todo.completed)}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          ></Todos>
        </div>
      </div>
    );
  }
}

export default App;
