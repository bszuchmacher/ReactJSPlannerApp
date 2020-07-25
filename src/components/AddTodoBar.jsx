import React from "react";

class AddTodoBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
		};
	}

	handleInputEditDone(title) {
		const completedItems = this.state.completedItems;
	
		completedItems.map((item) => {
		  if (item.title === title) {
			this.state.title = title;
		  }
		});
		this.setState({ completedItems: completedItems });
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
			<form onSubmit={this.onSubmit} className="col-md-10">
				<input
					className="input-large add-todo"
					type="text"
					name="title"
					placeholder="Add Todo ..."
					value={this.state.title}
					onChange={this.onChange}
					// onChange={(e) => this.handleInputEditDone(e.target.value, this.state.title)}
				/>
				<input type="submit" value="Submit" className="btn btn-success" />
			</form>
		);
	}
}

export default AddTodoBar;
