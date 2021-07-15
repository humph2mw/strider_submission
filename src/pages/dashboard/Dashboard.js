import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import jsonData from './receipts.json'
import HighlightCard from '../../components/highlightCard'
import { calculateAverageValueOfOrders } from '../../utils/dashboard'

export default function Dashboard () {
  // Importing the data from a local json file. Normally,
  // this page would make a fetch request to an api to retrieve
  // the data that it needs. The response would then be stored in
  // the state variable.
  const [data] = useState(jsonData)
  const [averageValueOfOrders, setAverageValueOfOrders] = useState(0)

  useEffect(() => {
    setAverageValueOfOrders(calculateAverageValueOfOrders(data))
  }, [])

  return (
    <Container id="dashboardContainer">
      <h1 id="dashboardTitle">Dashboard</h1>
      <Row>
        <Col md={4}>
          <HighlightCard title={averageValueOfOrders} description={'Average Value Per Order'} />
        </Col>
        <Col md={4}>
          <HighlightCard title={'Average Number of Items Per Order'}/>
        </Col>
        <Col md={4}>
          <HighlightCard title={'Largest Order'}/>
        </Col>
      </Row>
      <Row>
        {data.map(item => (<p key={item.OrderId}>{item.OrderId}</p>))}
      </Row>
    </Container>
  )
}
