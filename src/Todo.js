import React from "react";

class Todo extends React.Component{
	constructor(){
		super();
		this.state = {
	      todo: [],
	      newTodo: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	addTodo(){
		this.setState(prevState => {
			return{
				todo: prevState.todo.concat(prevState.newTodo),
				newTodo: ""
			};
		});
	}
	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	deleteTodo(event){
		const id = event.target.id;
		this.setState(prevState => {
			return{
				todo: prevState.todo.filter((x, index) => index != id)
			};
		});
	}
	render(){
		let todo = this.state.todo.map((item, index) => {
			return <div className = "todo-item" key = {index}> {item} <div onClick = {this.deleteTodo} id = {index} >X</div> </div>
		})
		return(
			<div className = "todo">
				{this.state.todo.length === 0 && <div className = "todo-item">brak zadań</div>}
				{todo}
				<div className = "todo-item">
					<input 
						type = "text" 
						value = {this.state.newTodo} 
						onChange = {this.handleChange} 
						name = "newTodo" 
						placeholder = "dodaj zadanie" 
					/>
					<button onClick = {this.addTodo} style = {{display:"block"}}>dodaj</button>
				</div>
			</div>
		);
	}
}

export default Todo;