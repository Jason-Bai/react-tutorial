import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      input: '/* please input code here */',
      ouput: '',
      err: ''
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    let code = e.target.value
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    } catch (err) {
      this.setState({
        err: err.message
      })
    }
    this.setState
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea 
            onChange={this.update}
            defaultValue={this.state.input}>
            </textarea>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    )
  }
}


/*

将以下内容输入到textarea中，右侧就可以查看结果

class App extends React.Component {
    render() {
        var myStyle = {
            backgroundColor: '#000',
            fontSize: '12px'
        };
        return (
            <div style={myStyle}>
                <header>This is header!</header>
                <a href="#">This is a tag!</a>
            </div>
        )
    }
}

*/



export default App