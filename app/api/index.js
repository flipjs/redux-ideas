import apiGetAllUsers from 'api-get-all-users'
import apiGetUser from 'api-get-user'
import apiUpdateUser from 'api-update-user'
import apiDeleteUser from 'api-delete-user'

const api = {
  getAllUsers: apiGetAllUsers,
  getUser: apiGetUser,
  updateUser: apiUpdateUser,
  deleteUser: apiDeleteUser
}

export default api

