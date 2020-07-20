import React from "react";

class AddTodoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="col-md-12">
        <input
          className="input-large add-todo"
          type="text"
          name="title"
          placeholder="What do you need to do? ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    );
  }
}

export default AddTodoBar;
