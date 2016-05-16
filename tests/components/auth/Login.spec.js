import React from 'react'
import { shallow } from 'enzyme'
import Login from 'modules/auth/Login'

describe('modules/auth/<Login />', function () {
  it('contains 1 h1 element', function () {
    expect(shallow(<Login />).find('h1').length).to.equal(1)
  })

  it('contains 2 input elements', function () {
    expect(shallow(<Login />).find('input').length).to.equal(2)
  })

  it('contains 1 button element', function () {
    expect(shallow(<Login />).find('button').length).to.equal(1)
  })
})

