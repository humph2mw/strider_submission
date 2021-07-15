import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import jsonData from './receipts.json'
import HighlightCard from '../../components/highlightCard'
import { calculateAverageNumberOfItemsPerOrder, calculateAverageValueOfOrders, calculateNumberOfRecurringCustomers } from '../../utils'
import OrdersPerDayGraph from '../../components/ordersPerDayGraph'

export default function Dashboard () {
  // Importing the data from a local json file. Normally,
  // this page would make a fetch request to an api to retrieve
  // the data that it needs. The response would then be stored in
  // the state variable.
  const [data] = useState(jsonData)
  const [averageValueOfOrders, setAverageValueOfOrders] = useState(0)
  const [averageNumberOfItemsPerOrder, setAverageNumberOfItemsPerOrder] = useState(0)
  const [countOfRecurringCustomers, setCountOfRecurringCustomers] = useState(0)

  useEffect(() => {
    setAverageValueOfOrders(calculateAverageValueOfOrders(data))
    setAverageNumberOfItemsPerOrder(calculateAverageNumberOfItemsPerOrder(data))
    setCountOfRecurringCustomers(calculateNumberOfRecurringCustomers(data))
  }, [])

  return (
    <Container id="dashboardContainer">
      <h1 id="dashboardTitle">Dashboard</h1>
      <Row>
        <Col md={4}>
          <HighlightCard title={averageValueOfOrders} description={'Average Value Per Order'} />
        </Col>
        <Col md={4}>
          <HighlightCard title={averageNumberOfItemsPerOrder} description={'Average Number of Items Per Order'}/>
        </Col>
        <Col md={4}>
          <HighlightCard title={countOfRecurringCustomers} description={'Number of Recurring Customers'}/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <OrdersPerDayGraph data={data}/>
        </Col>
      </Row>
    </Container>
  )
}
