import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './containers/main'
import reducer from './reducers'


const store = createStore(reducer)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
