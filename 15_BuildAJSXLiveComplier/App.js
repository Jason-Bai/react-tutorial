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

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}


export default App