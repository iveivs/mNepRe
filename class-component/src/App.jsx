import React from "react";
import Timer from "./components/Timer/Timer";
import { Posts } from "./components/Posts/Posts";
import { Form } from "./components/Form/Form";
import { FormHWtask } from "./components/Form/FormHWtask";
class App extends React.Component {
state = {
  posts: [
    {id: 'abc1', name: "JS Basic"},
    {id: 'abc2', name: "JS Advanced"},
    {id: 'abc3', name: "React JS"}
  ]
}

deletePost = (id) => {
  let newState = this.state.posts.filter((elem, index) => {
    if(elem.id !== id){
      return elem
    }
    
  })
  this.setState({posts: newState})
  console.log(newState);
}

  render() {
    return (
      <div className="App">
        <FormHWtask  />
        <br />
        <hr />
        <Form />
        <br />
        <hr />
        {this.state.posts.map((post) => {
          return (
            <h3 key={post.id}>{post.name}</h3>
          )
        })}
        <br />
        <hr />
        <Posts posts={this.state.posts} deletePost={this.deletePost}/>
        <br />
        <hr />
        <Timer />
      </div>
    )
  }
}

export default App;
