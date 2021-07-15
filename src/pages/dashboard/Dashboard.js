import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import jsonData from './receipts.json';
import HighlightCard from '../../components/highlightCard';

export default function Dashboard() {

  // Importing the data from a local json file. Normally,
  // this page would make a fetch request to an api to retrieve
  // the data that it needs. The response would then be stored in 
  // the state variable.
  const [data,] = useState(jsonData);

  return (
    <Container id="dashboardContainer">
      <h1 id="dashboardTitle">Dashboard</h1>
      <Row>
        <Col md={3}>
          <HighlightCard />
        </Col>
        <Col md={3}>
          <HighlightCard />
        </Col>
        <Col md={3}>
          <HighlightCard />
        </Col>
        <Col md={3}>
          <HighlightCard />
        </Col>
      </Row>
    </Container>
  )
}
