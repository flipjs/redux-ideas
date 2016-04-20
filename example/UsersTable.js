// pseudo example

import React, { Component, PropTypes } from 'react'

function mapStateToProps (state, props) {
  return {
    data: getUsers(state),
    name: props.name
    // for computed props, use reselect library
  }
}

function maDispatchToProps (dispatch) {
  return {
    loadData: () => dispatch({type: ON_FETCH_USERS})
  }
}

export default connect(mapStateToProps, maDispatchToProps)(DataTable)

