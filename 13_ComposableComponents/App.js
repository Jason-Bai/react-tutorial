import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      red: 0
    }
    // 通过这种方式可以改变上下文this为当前this
    this.update = this.update.bind(this)
  }

  update(e) {
    // 通过this.setState设置state
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }

  render() {
    // 这里可以多次调用组件，通过传入必要的property
    return (
      <div>
        <NumInput
          type="number"
          ref="red" 
          min={0}
          max={255}
          step={0.1}
          val={this.state.red}
          label="Red"
          update={this.update} /> 
      </div>
    )
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ? 
    <label>{this.props.label} - {this.props.val}</label> : ''
    return (
      <div>
      <input
        ref="inp" 
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['range', 'number'])
}


NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}


export default App