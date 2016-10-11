import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// 设置属性值时，使用{value}
ReactDOM.render(<App txt="this is the props text" cat={123} />, document.getElementById('app'))