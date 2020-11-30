import React from "react";
import ToggleMenu from "./ToggleMenu";
import Timer from "./Timer";
import Todo from "./Todo";
import Settings from "./Settings";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currShown: "Timer",
      minutes: "25",
      seconds: "00",
      work: "25",
      short: "5",
      long: "15",
      workForm: "25",
      shortForm: "5",
      longForm: "15",
      howOftenLongForm: "4",
      howOftenLong: "4",
      shortsInRow: "1",
      currCycle: "work",
      pause: true,
      clockTimeout: ""
    }
    this.setShown = this.setShown.bind(this);
    this.clockWorking = this.clockWorking.bind(this);
    this.pauseClock = this.pauseClock.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setSettings = this.setSettings.bind(this);
  }
  clockWorking(){
    let mins, secs;
    this.setState({
      pause: false
    });
    mins = parseInt(this.state.minutes);
    secs = parseInt(this.state.seconds);
    if(mins === 0 && secs === 0){
      if(this.state.currCycle === "work"){
        if(parseInt(this.state.shortsInRow) >= parseInt(this.state.howOftenLong)){
          //ma być długa przerwa
          this.setState(prevState => {
            return{
              minutes: prevState.long,
              seconds: "00",
              shortsInRow: "1",
              currCycle: "long",
              pause: true
            };
          })
        }
        else{
          //ma być krótka przerwa
          this.setState(prevState => {
            return{
              minutes: prevState.short,
              seconds: "00",
              shortsInRow: (parseInt(prevState.shortsInRow) + 1).toString(),
              currCycle: "short",
              pause: true
            };
          })
        }
      }
      else{
        this.setState(prevState => {
          return{
            minutes: prevState.work,
            seconds: "00",
            shortsInRow: (parseInt(prevState.shortsInRow) + 1).toString(),
            currCycle: "work",
            pause: true
          };
        })
      }
    }
    else{
      if(secs > 0){
        this.setState(prevState => {
          return{
            seconds: this.styled_time(parseInt(prevState.seconds) - 1)
          };
        })
      }
      else{
        this.setState(prevState => {
          return{
            seconds: "59",
            minutes: this.styled_time(parseInt(prevState.minutes) - 1)
          };
        })
      }
      this.setState({
        clockTimeout: setTimeout(() => this.clockWorking(), 1000)
      });
    }
  } 
  styled_time(time){
    if(time.toString().length === 1)
      return '0'+time;
    return time;
  }
  pauseClock(){
    this.setState({
      pause: true
    });
    clearTimeout(this.state.clockTimeout);
  }
  setShown(event){
    this.setState({
      currShown: event.target.innerHTML
    });
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  setSettings(event){
    event.preventDefault();
    clearTimeout(this.state.clockTimeout);
    this.setState(prevState => {
      return{      
        work: prevState.workForm,
        short: prevState.shortForm,
        long: prevState.longForm,
        howOftenLong: prevState.howOftenLongForm,
        currShown: "Timer",
        minutes: this.styled_time(prevState.workForm),
        seconds: "00",
        shortsInRow: "1",
        currCycle: "work",
        pause: true,
        clockTimeout: ""
      };
    });
  }
  render(){
    return (
      <div className="app">
        <ToggleMenu 
          setShown = {this.setShown}
        />
        {this.state.currShown === "Timer" && 
        <Timer 
          minutes = {this.state.minutes}
          seconds = {this.state.seconds}
          currCycle = {this.state.currCycle}
          pause = {this.state.pause}
          clockWorking = {this.clockWorking}
          pauseClock = {this.pauseClock}
        />}
        {this.state.currShown === "Todo" && 
        <Todo 
          todo = {this.state.todo}
        />}
        {this.state.currShown === "Settings" && 
        <Settings 
          workForm = {this.state.workForm}
          shortForm = {this.state.shortForm}
          longForm = {this.state.longForm}
          howOftenLongForm = {this.state.howOftenLongForm}
          handleChange = {this.handleChange}
          setSettings = {this.setSettings}
        />}
      </div>
    );
  }
}

export default App;
