// import constants from actions

import { GET_ALL_USERS } from './users-actions'

// define reducer constants here

export const GET_ALL_USERS_REQUESTED = 'GET_ALL_USERS_REQUESTED'
export const GET_ALL_USERS_SUCCEEDED = 'GET_ALL_USERS_SUCCEEDED'
export const GET_ALL_USERS_FAILED    = 'GET_ALL_USERS_FAILED'

// define sagas here

function watchGetAllUsers () {
  // listens to GET_ALL_USERS
  // dispatches GET_ALL_USERS_REQUESTED
  // dispatches GET_ALL_USERS_SUCCEEDED
  // dispatches GET_ALL_USERS_FAILED
}

