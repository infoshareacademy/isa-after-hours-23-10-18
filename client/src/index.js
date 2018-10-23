import React from 'react'
import ReactDOM from 'react-dom'

import { store } from './store'
import { Provider } from 'react-redux'
import Auth from './Auth'
import App from './App'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Auth>
      <App />
    </Auth>
  </Provider>
  , document.getElementById('root')
)
