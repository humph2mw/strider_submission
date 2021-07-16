import React from 'react'
import TestRenderer from 'react-test-renderer'
import FrequentCustomerCard from './index'
import data from '../../pages/dashboard/receipts.json'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<FrequentCustomerCard data={data} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
