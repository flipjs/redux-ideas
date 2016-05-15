import React from 'react'

function selectState (state) {
  return {
    users: getUsers(state),
    userProfile: getUserProfile(state)
  }
}

const actions = {
  loadUsers
}

const propTypes = {
  users: PropTypes.array.isRequired,
  userProfile: PropTypes.object.isRequired,
  loadUsers: PropTypes.func.isRequired
}

export function AboutPage (props) {
  const {
    users,
    userProfile,
    loadUsers
  } = props
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
AboutPage.propTypes = propTypes

export default connect(selectState, actions)(AboutPage)

