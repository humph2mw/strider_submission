/**
 * Takes in an array of objects and returns the average of the object's
 * Total property.
 * @param {Array} data Objects to get the average total from
 * @returns Average calculated on Total
 */
export const calculateAverageValueOfOrders = (data) => {
  // Parse Total as a Float and remove the first character
  // to get rid of the $
  const average = data.reduce((total, next) =>
    total + parseFloat(next.Total.substring(1)), 0) / data.length
  return average
}

/**
 * Calculates the average number of items per order by counting
 * the number of items in each order and then dividing the sum
 * by the length of the array.
 * @param {*} data Objects to get the average number of items from
 * @returns The average number of items per order
 */
export const calculateAverageNumberOfItemsPerOrder = (data) => {
  let numberOfItems = 0
  data.forEach(item => {
    numberOfItems += item.Items.length
  })
  return numberOfItems / data.length
}

/**
 * Loops through the data and counts the number of customers
 * that have made more than one order
 * @param {array} data Customer data to loop through
 * @returns Number of customers that have bought more than once
 */
export const calculateNumberOfRecurringCustomers = (data) => {
  let countOfRecurringCustomers = 0
  const uniqueCustomers = [...new Set(data.map(item => item.CustomerId))]
  uniqueCustomers.forEach(customer => {
    const numberOfOccurences = getOccurence(data, customer)
    if (numberOfOccurences > 1) {
      countOfRecurringCustomers++
    }
  })
  return countOfRecurringCustomers
}

/**
 * Returns a filtered array based on the requested value to filter by
 * @param {array} array array to loop through
 * @param {string} value the value to filter by
 * @returns an array filtered on the specified value
 */
export const getOccurence = (array, value) => {
  return array.filter((item) => (item.CustomerId === value)).length
}

/**
 * Returns a filtered array based on a trimmed Date value
 * @param {array} array array to loop through
 * @param {string} value the value to filter by
 * @returns an array filtered by a trimmed date value
 */
export const getDateOccurence = (array, value) => {
  return array.filter((item) => (item.Date.slice(0, 10) === value)).length
}

/**
 * Gets unique customers, then loops through to see who has bought more than once
 * @param {array} array data to loop through
 * @returns a filtered list of customers that have bought more than once
 */
export const getRecurringCustomerNames = (array) => {
  const customers = unique(array, ['CustomerId', 'CustomerName'])
  const recurringCustomers = []
  customers.forEach(customer => {
    let count = 0
    array.forEach(item => {
      if (item.CustomerId === customer.CustomerId) {
        count++
      }
    })
    if (count > 1) {
      recurringCustomers.push({ customerId: customer.CustomerId, customerName: customer.CustomerName })
    }
  })
  return recurringCustomers
}

/**
 * Loops through the array and adds the values for Total
 * to calculate the amount spent by the specific customerId
 * @param {array} data array to loop through
 * @param {number} customerId customerId to check for
 * @returns the total spent by the customer
 */
export const calculateTotalSpentByCustomer = (data, customerId) => {
  let total = 0
  data.forEach(item => {
    if (item.CustomerId === customerId) {
      total += parseFloat(item.Total.substring(1))
    }
  })
  return total.toFixed(2)
}

/**
 * Loops through the array and filters the results
 * on a key that consists of multiple properties
 * @param {array} array Array to filter by
 * @param {array} keyProps Array of values to create a combined key
 * @returns a Map that is filted on the combined key
 */
export const unique = (array, keyProps) => {
  // Create a key based on the combined props
  const keyValueArray = array.map(entry => {
    const key = keyProps.map(k => entry[k]).join('|')
    return [key, entry]
  })

  // Return a new array that filters on the new keys
  return new Map(keyValueArray)
}
