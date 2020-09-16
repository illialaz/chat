import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from 'redux-logger'

import { rootReducer } from "./reducers"
import { rootSaga } from "./sagas"
import { setupSocket } from "../sockets"
import username from "../utils/name"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger)))

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(rootSaga, { socket, username })
