/* eslint-disable no-undef */
import {
  calculateAverageValueOfOrders,
  calculateAverageNumberOfItemsPerOrder,
  calculateNumberOfRecurringCustomers,
  getDateOccurence
} from './index'

import data from '../pages/dashboard/receipts.json'

describe('test utility functions', () => {
  test('should calculate the correct number of recurring customers', () => {
    expect(calculateAverageValueOfOrders(data)).toBe(32)
  })

  test('should calculate the average number of items per order', () => {
    expect(calculateAverageNumberOfItemsPerOrder(data)).toBe(2.375)
  })

  test('should calculate the number of recurring customers', () => {
    expect(calculateNumberOfRecurringCustomers(data)).toBe(2)
  })

  test('should get the correct number of date occurences', () => {
    expect(getDateOccurence(data, '2021-02-01')).toBe(1)
  })
})
