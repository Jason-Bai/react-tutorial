import React from 'react'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      txt: 'this is state txt',
      cat: 0
    }
    // 通过这种方式可以改变上下文this为当前this
    this.update = this.update.bind(this)
  }

  update(e) {
    // 通过this.setState设置state
    this.setState({txt: e.target.value})
  }

  render() {
    // 这里可以多次调用组件，通过传入必要的property
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

// 通过这种方式来约定App节点中包含哪些属性及必须包含的节点，具体需要查看一下文档就可以了
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// 设置默认属性值
App.defaultProps = {
  txt: 'this is default txt'
}

// 将部分内容构建成新的组件
const Widget = (props) => {
    return (
      <div>
        <input type="text" onChange={props.update} />
        <h1>{props.txt}</h1>
      </div>
    )
}

export default App