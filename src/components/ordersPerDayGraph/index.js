import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
import PropTypes from 'prop-types'
import { getDateOccurence } from '../../utils'
import { Bar } from 'react-chartjs-2'

export default function OrdersPerDayGraph (props) {
  const [graphData, setGraphData] = useState({})
  const BLUE = '#0e52c2'

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  useEffect(() => {
    const dateData = {
      labels: [],
      datasets: [{
        label: '# of Orders Per Day',
        data: [],
        backgroundColor: []
      }]
    }
    // Create the label for each bar
    dateData.labels = [...new Set(props.data.map(item => item.Date.slice(0, 10)))]
    // Calculate the value and set the color of each bar
    dateData.labels.forEach(item => {
      const occurence = getDateOccurence(props.data, item)
      dateData.datasets[0].data.push(occurence)
      dateData.datasets[0].backgroundColor.push(BLUE)
    })
    setGraphData(dateData)
  }, [])

  return (
    <Card id="ordersPerDayCard">
      <Card.Title>Orders Per Day</Card.Title>
      <Bar data={graphData} options={options} />
    </Card>
  )
}

OrdersPerDayGraph.propTypes = {
  data: PropTypes.array
}
