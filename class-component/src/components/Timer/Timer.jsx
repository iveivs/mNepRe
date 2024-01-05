import React from "react";
class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
};

componentDidMount() {
  const userCount = localStorage.getItem("timer")
  if(userCount) {
    this.setState({count: +userCount})
  }
}

componentDidUpdate() {
  localStorage.setItem("timer", this.state.count)
}

componentWillUnmount() {
  clearInterval(this.counterID)
}

handleStart = () => {
  this.setState({isCounting: true})
  this.counterID = setInterval(() => {
    this.setState({count: this.state.count +1})
  }, 1000)
}

handleStop = () => {
  this.setState({isCounting: false})
  clearInterval(this.counterID)
}

handleReset = () => {
  this.setState({isCounting: false, count: 0})
  clearInterval(this.counterID)
}

  render() {
    return (
      <div className="App">
        <h2>React Timer</h2>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Timer;
