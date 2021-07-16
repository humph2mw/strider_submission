import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { getRecurringCustomerNames, getOccurence, calculateTotalSpentByCustomer } from '../../utils'
import './style.css'
import PropTypes from 'prop-types'

export default function FrequentCustomerCard (props) {
  const [customers, setCustomers] = useState(getRecurringCustomerNames(props.data))

  useEffect(() => {
    const updatedCustomers = customers
    // Get number of orders per customer
    updatedCustomers.forEach(customer => {
      const occurence = getOccurence(props.data, customer.customerId)
      customer.numberOfOrders = occurence
    })

    // Get total amount spent by each customer
    updatedCustomers.forEach(customer => {
      const totalSpent = calculateTotalSpentByCustomer(props.data, customer.customerId)
      customer.totalSpent = totalSpent
    })
    setCustomers(updatedCustomers)
  }, [customers])
  return (
    <Card id="frequentCustomerCard">
      <Card.Title>Recurring Customers</Card.Title>
      <Table striped hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Number of Orders</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerName}</td>
              <td>{customer.numberOfOrders}</td>
              <td>{`$${customer.totalSpent}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

FrequentCustomerCard.propTypes = {
  data: PropTypes.array
}
