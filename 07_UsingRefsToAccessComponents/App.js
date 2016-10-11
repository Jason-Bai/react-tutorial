import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    // 通过这种方式可以改变上下文this为当前this
    this.update = this.update.bind(this)
  }

  update(e) {
    // 通过this.setState设置state
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render() {
    // 这里可以多次调用组件，通过传入必要的property
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <hr />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <hr />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <hr />
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    )
  }
}

export default App