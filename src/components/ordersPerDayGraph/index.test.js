import React from 'react'
import TestRenderer from 'react-test-renderer'
import OrdersPerDayGraph from './index'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<OrdersPerDayGraph />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
