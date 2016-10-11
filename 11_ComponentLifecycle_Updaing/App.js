import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
    this.state = {increasing: false}
  }

  update(e) {
    ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('app'))
  }

  componentWillReceiveProps(nextProps) {
    // 接收到新的props变化后执行
    this.setState({increasing: nextProps.val > this.props.val})
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // 给出判断条件什么情况下更新，返回true更新,false不更新
    return nextProps.val % 5 === 0
  }

  componentDidUpdate(prevProps, prevState) {
    // 组件更新之后执行
    console.log('prevProps', prevProps)
  }

  render() {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update}>{this.props.val}</button>
    )
  }
}

App.defaultProps = {
  val: 0
}

export default App