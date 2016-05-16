import React, { PropTypes } from 'react'

const propTypes = {
  loginUser: PropTypes.func.isRequired
}

export class Login extends React.Component {
  constructor () {
    super()
    this.username = ''
    this.password = ''
    this.handleClick = this.handleClick.bind(this)
    this.getUsernameInput = this.getUsernameInput.bind(this)
    this.getPasswordInput = this.getPasswordInput.bind(this)
  }

  handleClick () {
    const username = this.username.value
    const password = this.password.value
    this.props.loginUser({username, password})
    this.username.value = ''
    this.password.value = ''
  }

  getUsernameInput (node) {
    this.username = node
  }

  getPasswordInput (node) {
    this.password = node
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Login</h1>
        <input type='text' ref={this.getUsernameInput} />
        <input type='text' ref={this.getPasswordInput} />
        <button type='button' onClick={this.handleClick}>
          Login
        </button>
      </div>
    )
  }
}
Login.propTypes = propTypes

export default Login

