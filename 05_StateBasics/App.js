import React from 'react'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      txt: 'this is state txt',
      cat: 0
    }
  }

  update(e) {
    // 通过this.setState设置state
    this.setState({txt: e.target.value})
  }

  render() {
    // JSX中节点上的属性可以通过`{this.state[stateName]}`调用
    // 通过`{this.eventMethod.bind(this)}`方式进行绑定
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
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

export default App