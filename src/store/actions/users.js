import * as types from '../types'

let nextUserId = 0

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const populateUsersList = users => ({
  type: types.SET_USERS_LIST,
  users
})
