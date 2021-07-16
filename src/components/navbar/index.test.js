import React from 'react'
import TestRenderer from 'react-test-renderer'
import Navbar from './index'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Navbar />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
