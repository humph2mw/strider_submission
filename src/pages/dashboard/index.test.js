import React from 'react'
import TestRenderer from 'react-test-renderer'
import Dashboard from './index'
import { render, screen } from '@testing-library/react'

describe('dashboard tests', () => {
  describe('make sure content is on the page', () => {
    test('should have the correct values for the highlightCards', async () => {
      render(<Dashboard />)

      const highlightCardTitleOne = await screen.findByText('$32')
      const highlightCardDescriptionOne = await screen.findByText('Average Value Per Order')
      const highlightCardTitleTwo = await screen.findByText('2.375')
      const highlightCardDescriptionTwo = await screen.findByText('Average Number of Items Per Order')
      const hightlightCardTitleThree = await screen.findByText('2')
      const highlightCardDescriptionThree = await screen.findByText('Number of Recurring Customers')

      expect(highlightCardTitleOne).toBeTruthy()
      expect(highlightCardTitleOne.textContent).toEqual('$32')
      expect(highlightCardDescriptionOne).toBeTruthy()
      expect(highlightCardDescriptionOne.textContent).toEqual('Average Value Per Order')
      expect(highlightCardTitleTwo).toBeTruthy()
      expect(highlightCardTitleTwo.textContent).toEqual('2.375')
      expect(highlightCardDescriptionTwo).toBeTruthy()
      expect(highlightCardDescriptionTwo.textContent).toEqual('Average Number of Items Per Order')
      expect(hightlightCardTitleThree).toBeTruthy()
      expect(hightlightCardTitleThree.textContent).toEqual('2')
      expect(highlightCardDescriptionThree).toBeTruthy()
      expect(highlightCardDescriptionThree.textContent).toEqual('Number of Recurring Customers')
    })
  })

  describe('snapshot', () => {
    it('renders correctly', () => {
      const tree = TestRenderer
        .create(<Dashboard />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
