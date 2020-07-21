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
					
				</p>
			</div>
		);
	}
}

export default TodoItem;
