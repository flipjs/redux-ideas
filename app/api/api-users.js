import { httpRequest } from './http-request'

const USERS = 'users'

export function apiAddUser (data) {
  return httpRequest.post(USERS, data)
}

export function apiGetUser (id) {
  return httpRequest.get(`${USERS}/${id}`)
}

export function apiGetAllUsers () {
  return httpRequest.get(USERS)
}

export function apiUpdateUser (id) {
  return httpRequest.put(`${USERS}/${id}`)
}

export function apiDeleteUser (id) {
  return httpRequest.delete(`${USERS}/${id}`)
}

