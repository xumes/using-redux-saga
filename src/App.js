import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import indexSaga from './sagas/index'
import reducers from './reducers'
import Info from './Info';

import createSagaMiddleware from 'redux-saga'
import UserAgent from './UserAgent';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
)


sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent />
        </div>
      </Provider>
    )
  }
}

export default App
