import React from 'react'
import TestRenderer from 'react-test-renderer'
import ItemPurchaseFrequencyGraph from './index'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<ItemPurchaseFrequencyGraph />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
