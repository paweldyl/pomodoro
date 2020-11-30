import React from "react";

class Timer extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<main className = "timer">
			<div className = "curr-cycle">
				{this.props.currCycle}
			</div>
				<div className = "time">
					{this.props.minutes}:{this.props.seconds}		
				</div>
				<div className = "time-buttons">
					{this.props.pause && <div className = "pause-btn" onClick = {this.props.clockWorking}>start</div>}
					{!this.props.pause && <div className = "pause-btn" onClick = {this.props.pauseClock}>pause</div>}
				</div>			
			</main>
		);
	}
}

export default Timer;