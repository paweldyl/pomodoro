import React from "react";

class Settings extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<section className = "settings">
				<form>
					<p>Work:</p>
					<input type = "number" onChange = {this.props.handleChange} value = {this.props.workForm} name = "workForm" /> minutes
					<p>Short break:</p>
					<input type = "number" onChange = {this.props.handleChange} value = {this.props.shortForm} name = "shortForm" /> minutes
					<p>Long break:</p>
					<input type = "number" onChange = {this.props.handleChange} value = {this.props.longForm} name = "longForm" /> minutes
					<p>long break after:</p>
					<input type = "number" onChange = {this.props.handleChange} value = {this.props.howOftenLongForm} name = "howOftenLongForm" /> breaks
					<br /><br />
					<button onClick = {e => {this.props.setSettings(e)}}>set</button>
				</form>
			</section>
		);
	}
}

export default Settings;