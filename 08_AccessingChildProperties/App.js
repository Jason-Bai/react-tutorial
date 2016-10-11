import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    // 这里可以多次调用组件，通过传入必要的property
    return (
     <Button>I <Heart /> React</Button>
    )
  }
}

class Button extends React.Component {
  render() {
    // 通过this.props.children调用组建内的内容
    return (
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App