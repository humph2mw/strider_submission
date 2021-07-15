import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'

export default function ItemPurchaseFrequencyGraph (props) {
  const [pieData, setPieData] = useState({})
  const options = {
    indexAxis: 'y',
    responsive: true
  }
  const ORANGE = 'darkorange'

  const flattenList = () => {
    let listOfItems = []
    props.data.forEach(item => {
      listOfItems.push(item.Items)
    })
    // Flatten the list
    listOfItems = [].concat.apply([], listOfItems)
    return listOfItems
  }

  const createLabelList = () => {
    let listOfItems = flattenList()
    // Filter the list to only include item names
    listOfItems = [...new Set(listOfItems.map((item) => (item.Item)))]
    return listOfItems
  }

  const createPieDataset = () => {
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
    const pieData = {
      labels: [],
      datasets: [{
        label: '# of Times an Item Has Been Ordered',
        data: [],
        backgroundColor: []
      }]
    }
    // Get the name of each item into a list
    pieData.labels = createLabelList()
    pieData.datasets[0].data = createPieDataset()
    pieData.datasets[0].backgroundColor = pieData.datasets[0].data.map(row => (ORANGE))
    setPieData(pieData)
  }, [])

  return (
    <Card id="ordersPerDayCard">
      <Card.Title>Item Order Frequency</Card.Title>
      <Bar data={pieData} options={options} />
    </Card>
  )
}

ItemPurchaseFrequencyGraph.propTypes = {
  data: PropTypes.object
}
