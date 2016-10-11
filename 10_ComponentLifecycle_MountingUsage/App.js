import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }

  update(e) {

    this.setState({
      val: this.state.val + 1
    })

  }

  componentWillMount() {
    // render之前，只调用一次
    console.log('mounting...')
    this.setState({m: 2})
  }

  render() {
    // 每次state变化后，都会重新调用，这个部分的内容会填充到相应的DOM中
    console.log('rendering..')
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    )
  }

  componentDidMount() {
    // render内容第一次填充到DOM后调用，只调用一次
    console.log('mounted')
    // 找到当前DOM
    console.log(ReactDOM.findDOMNode(this))
    // 添加定时器
    this.inc = setInterval(this.update, 5000)
  }

  componentWillUnmount() {
    console.log('bye!')
    // 取消定时器
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  constructor() {
    super()
    this.mount = this.mount.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  mount() {
    // 将App填充到div#a中，会依次出发componentwillmount, render, componentdidmount
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    // 将App从div#a中移除，会触发componentWillunmount
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper