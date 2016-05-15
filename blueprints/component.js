import React from 'react'

const propTypes = {
  users: PropTypes.array.isRequired,
  userProfile: PropTypes.object.isRequired,
  loadUsers: PropTypes.func.isRequired
}

function AboutPage (props) {
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

export default AboutPage

