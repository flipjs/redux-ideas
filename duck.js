import keyMirror from 'key-mirror'

/* Constants */

const C = keyMirror({
  GET_ALL_USERS: null,
  GET_ALL_USERS_REQUESTED: null,
  GET_ALL_USERS_RESOLVED: null,
  GET_ALL_USERS_REJECTED: null,
  RELOAD_ALL_USERS: null,
  RELOAD_ALL_USERS_REQUIRED: null
})

/* Saga Actions */

function getAllUsers () {
  return {
    type: C.GET_ALL_USERS
  }
}

function reloadAllUsers () {
  return {
    type: C.RELOAD_ALL_USERS
  }
}

/* Reducer Actions */

function requestGetAllUsers () {
  return {
    type: C.GET_ALL_USERS_REQUESTED,
    payload: {
      fetching: true,
      reload: false
    }
  }
}

function resolveGetAllUsers (data) {
  return {
    type: C.GET_ALL_USERS_RESOLVED,
    payload: {
      fetching: false,
      list: data
    }
  }
}

function rejectGetAllUsers (error) {
  return {
    type: C.GET_ALL_USERS_REJECTED,
    payload: {
      fetching: false,
      error
    }
  }
}

function requireReloadAllUsers () {
  return {
    type: C.RELOAD_ALL_USERS_REQUIRED,
    payload: {
      reload: true
    }
  }
}

/* Selectors */

function selectUsers (state) {
  return state.users.list
}

/* Reducers */

const initialState = {
  fetching: false,
  reload: false,
  list: [],
  error: null
}

function usersReducer (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case C.RELOAD_ALL_USERS_REQUIRED:
      /* fall through */
    case C.GET_ALL_USERS_REQUESTED:
      /* fall through */
    case C.GET_ALL_USERS_RESOLVED:
      /* fall through */
    case C.GET_ALL_USERS_REJECTED:
      return {
        ...state,
        ...payload
      }
    default: return state
  }
}

/* Sagas */

function * watchGetAllUsers () {
}
