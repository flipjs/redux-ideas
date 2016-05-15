import React from 'react'
import AboutPage from 'components/AboutPage'

function selectState (state) {
  return {
    users: getUsers(state),
    userProfile: getUserProfile(state)
  }
}

const actions = {
  loadUsers
}

export default connect(selectState, actions)(AboutPage)

