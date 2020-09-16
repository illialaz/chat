import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from 'redux-logger'

import "./index.css"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import { rootReducer } from "./store/reducers"
import { rootSaga } from "./store/sagas"
import { setupSocket } from "./sockets"
import username from "./utils/name"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger)))

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(rootSaga, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
