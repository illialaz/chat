import { ADD_USER, SET_USERS_LIST } from '../types'

const initialState = []

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { name: action.name, id: action.id }]
    case SET_USERS_LIST:
      return action.users
    default:
      return state
  }
}
