import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'

export default function ItemPurchaseFrequencyGraph (props) {
  const [data, setData] = useState({})
  const options = {
    indexAxis: 'y',
    responsive: true
  }
  const ORANGE = 'darkorange'

  /**
   * Flatten the array of Items
   */
  const flattenList = () => {
    let listOfItems = []
    props.data.forEach(item => {
      listOfItems.push(item.Items)
    })
    // Flatten the list
    listOfItems = [].concat.apply([], listOfItems)
    return listOfItems
  }

  /**
   * Filter the list to only include item names
   */
  const createLabelList = () => {
    let listOfItems = flattenList()
    listOfItems = [...new Set(listOfItems.map((item) => (item.Item)))]
    return listOfItems
  }

  /**
   * Calculate the values for each bar
   */
  const createDataset = () => {
    const labels = createLabelList()
    const itemList = flattenList()
    const itemCounts = []
    labels.forEach(label => {
      let count = 0
      itemList.forEach(item => {
        if (item.Item === label) {
          count += parseInt(item.Quantity)
        }
      })
      itemCounts.push(count)
    })
    return itemCounts
  }

  useEffect(() => {
    const graphData = {
      labels: [],
      datasets: [{
        label: '# of Times an Item Has Been Ordered',
        data: [],
        backgroundColor: []
      }]
    }
    // Get the name of each item into a list
    graphData.labels = createLabelList()
    // Get the data values
    graphData.datasets[0].data = createDataset()
    // Add color to each bar
    graphData.datasets[0].backgroundColor = graphData.datasets[0].data.map(() => (ORANGE))
    setData(graphData)
  }, [])

  return (
    <Card id="itemPurchaseFrequencyCard">
      <Card.Title>Item Order Frequency</Card.Title>
      <Bar data={data} options={options} />
    </Card>
  )
}

ItemPurchaseFrequencyGraph.propTypes = {
  data: PropTypes.array
}
