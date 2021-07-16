import React from 'react'
import TestRenderer from 'react-test-renderer'
import Dashboard from './index'

describe('dashboard tests', () => {
  describe('snapshot', () => {
    it('renders correctly', () => {
      const tree = TestRenderer
        .create(<Dashboard />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
