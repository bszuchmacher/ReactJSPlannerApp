import React from "react";

class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div class="row">
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          {title}
		  <button
            className="btn btn-delete"
            onClick={this.props.delTodo.bind(this, id)} > Delete Me
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
