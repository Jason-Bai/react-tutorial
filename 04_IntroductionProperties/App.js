import React from 'react'


class App extends React.Component {
  render() {
    // JSX中节点上的属性可以通过`{this.props[propertyName]}`调用
    // 
    return (
      <div>
        {this.props.txt}-{this.props.cat}
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