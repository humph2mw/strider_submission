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

export const calculateNumberOfRecurringCustomers = (data) => {
  let countOfRecurringCustomers = 0
  const uniqueCustomers = [...new Set(data.map(item => item.CustomerId))]
  console.log(uniqueCustomers)
  uniqueCustomers.forEach(customer => {
    const numberOfOccurences = getOccurence(data, customer)
    if (numberOfOccurences > 1) {
      countOfRecurringCustomers++
    }
  })
  return countOfRecurringCustomers
}

const getOccurence = (array, value) => {
  return array.filter((item) => (item.CustomerId === value)).length
}
