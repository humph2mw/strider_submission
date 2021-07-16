import React from 'react'
import HighlightCard from './index'
import { render, screen } from '@testing-library/react'

describe('test highlightCard component', () => {
  describe('highlightCard displays the correct information', () => {
    test('should show the information correctly', async () => {
      render(<HighlightCard title={'23'} description={'test description'}/>)
      // Check to see that title and description exist
      const title = await screen.findByText(23)
      expect(title).toBeTruthy()
      const description = await screen.findByText('test description')
      expect(description).toBeTruthy()
    })
  })
})
