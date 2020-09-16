import { takeEvery } from "redux-saga/effects"
import { ADD_MESSAGE } from "../types"

export const rootSaga = function* (params) {
  yield takeEvery(ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}
