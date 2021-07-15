/**
 * Takes in an array of objects and returns the average of the object's
 * Total parameter.
 * @param {Array} data Objects to get the average total from
 * @returns Average calculated on Total
 */
export const calculateAverageValueOfOrders = (data) => {
  const average = data.reduce((total, next) =>
    total + parseFloat(next.Total.substring(1)), 0) / data.length
  return average
}
