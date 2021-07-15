import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.css'

export default function HighlightCard (props) {
  return (
    <Card id="highlightCard">
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card>
  )
}

HighlightCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
