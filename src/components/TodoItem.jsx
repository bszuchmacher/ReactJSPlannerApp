import React from "react";

class TodoItem extends React.Component {
  
  starToggle = () => {
    this.setState({
      star: !this.state.star
    }); 
  }

  state = {
    star: false
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="row">
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
      
        <div className = { this.state.star ? " star" : ''}>
          {title}
        </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.props.delTodo.bind(this, id)}
          >
            Delete Me
          </button>
          <button 
          type="button"
          className="btn btn-primary"
          onClick={this.starToggle}>Favorite
          </button>
          {/* <button className="edit-btn" 
          onClick={this.props.editTodo.bind(this, id)}>
            Edit Me</button> */}
      </div>
    );
  }
}

export default TodoItem;
