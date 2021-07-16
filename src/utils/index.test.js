import {
  calculateAverageValueOfOrders,
  calculateAverageNumberOfItemsPerOrder,
  calculateNumberOfRecurringCustomers,
  getDateOccurence,
  getOccurence,
  getRecurringCustomerNames,
  calculateTotalSpentByCustomer,
  unique
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

  describe('test getOccurence', () => {
    test('should get the correct number of occurences', () => {
      expect(getOccurence(data, 1)).toBe(2)
    })
  })

  describe('test getRecurringCustomerNames', () => {
    test('should get the correct list of names', () => {
      expect(getRecurringCustomerNames(data)).toEqual([
        { customerId: 1, customerName: 'Elizabeth' },
        { customerId: 3, customerName: 'Emira' }
      ])
    })
  })

  describe('test calculateTotalSpentByCustomer', () => {
    test('should get the correct total', () => {
      expect(calculateTotalSpentByCustomer(data, 1)).toBe('36.00')
    })
  })

  describe('test unique', () => {
    test('should get the correct unique names', () => {
      expect(unique(data, ['CustomerId', 'CustomerName']).size).toEqual(6)
    })
  })
})
