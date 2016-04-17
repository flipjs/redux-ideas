// pseudo example

import React, { Component, PropTypes } from 'react'

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  name: PropTypes.string,
  users: PropTypes.array.isRequired
}

const defaultProps = {
  name: 'Userlist'
}

export class UsersTable extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  handleRefreshButtonClick () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <DataTable
        data={this.props.users}
        name={this.props.name}
        onRefreshButtonClick={this.handleRefreshButtonClick}
      />
    )
  }
}

UsersTable.propTypes = propTypes
UsersTable.defaultProps = defaultProps

// UsersTable Container

function stateToProps (state, props) {
  return {
    users: getUsers(state),
    name: props.name
  }
}

const actionsToProps = {
  fetchUsers // type: ON_FETCH_USERS
}

export default connect(stateToProps, actionsToProps)(UsersTable)

