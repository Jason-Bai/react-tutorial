import React from 'react'


class App extends React.Component {
  render() {
    // 与01对应的JSX部分，其实是调用了这个方法
    return React.createElement('h1', null, 'Hello world!')
  }
}
export default App