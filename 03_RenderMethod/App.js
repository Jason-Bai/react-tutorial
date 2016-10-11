import React from 'react'


class App extends React.Component {
  render() {
    // return返回的DOM必须被某个DOM包含
    // return <h1>Hello world!</h1><div>Article here!</div>
    return (
      <div>
        <h1>Hello world!</h1>
        <div>
          Article here!
        </div>
      </div>
    )
  }
}
export default App