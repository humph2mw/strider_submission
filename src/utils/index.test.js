/* eslint-disable no-undef */
import {
  calculateAverageValueOfOrders,
  calculateAverageNumberOfItemsPerOrder,
  calculateNumberOfRecurringCustomers,
  getDateOccurence
} from './index'

import data from '../pages/dashboard/receipts.json'

describe('test utility functions', () => {
  describe('test calculateAverageValueOfOrders', () => {
    test('should calculate the correct number of recurring customers', () => {
      expect(calculateAverageValueOfOrders(data)).toBe(32)
    })
  })

  describe('test calculateAverageNumberOfItemsPerOrder', () => {
    test('should calculate the average number of items per order', () => {
      expect(calculateAverageNumberOfItemsPerOrder(data)).toBe(2.375)
    })
  })

  describe('test calculateNumberOfRecurringCustomers', () => {
    test('should calculate the number of recurring customers', () => {
      expect(calculateNumberOfRecurringCustomers(data)).toBe(2)
    })
  })

  describe('test getDateOccurence', () => {
    test('should get the correct number of date occurences', () => {
      expect(getDateOccurence(data, '2021-02-01')).toBe(1)
    })

    test('should not find any occurences for a date not in the array', () => {
      expect(getDateOccurence(data, '2021-03-01')).toBe(0)
    })
  })
})
