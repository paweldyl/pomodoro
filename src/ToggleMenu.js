import React from "react";

class Todo extends React.Component{
	constructor(){
		super();
		this.state = {
			menuClass: ""
		}
		this.showHide = this.showHide.bind(this);
	}
	showHide(){
		if(this.state.menuClass === ""){
			this.setState({
				menuClass: "vissible"
			});
		}
		else{
			this.setState({
				menuClass: ""
			});
		}
	}
	render(){
		return(
			<div className = {this.state.menuClass}>
				<div onClick = {this.showHide} className = {"toggle-menu " + this.state.menuClass}>
					<div className = "burger-line-1"></div>
					<div className = "burger-line-2"></div>
					<div className = "burger-line-3"></div>
				</div>
				<nav className = "hidden-menu">
					<div onClick = {(e) => {this.props.setShown(e); this.showHide();}}>Timer</div>
					<div onClick = {(e) => {this.props.setShown(e); this.showHide();}}>Todo</div>
					<div onClick = {(e) => {this.props.setShown(e); this.showHide();}}>Settings</div>
				</nav>
				<div onClick = {this.showHide} className = "shady-area"></div>
			</div>
		);
	}
}

export default Todo;