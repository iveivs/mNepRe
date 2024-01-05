import React from "react";
import Timer from "./components/Timer/Timer";
class App extends React.Component {
  state = {
    posts: [],
    loading: true,
    comments: [],
    count: 0,
    someKey: false
  }

  // handleClick = () => {
  //   this.setState({count: this.state.count +1})
  // }
  // handleClick2 =() => {
  //   this.setState({count: this.state.count -1})
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({posts: data, loading: false }))

    this.timerId = setInterval(()=>{
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => this.setState({comments: data}))
    }, 3000)
  }

  // componentDidUpdate() {
  //     console.log('didUpdate');
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerId)
  // }
  render() {
    return (
      <div className="App">
        {/* <span style={{margin: '0 0.75rem', display: 'inline-block'}}>{this.state.count}</span>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClick2}>-</button> */}
        
        {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} was loaded </h3>}

        <Timer />
      </div>
    )
  }
}

export default App;
