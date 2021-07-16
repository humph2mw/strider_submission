import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

export default function Nav () {
  return (
    <div>
      <Navbar id="navbar">
        <Navbar.Brand><img id="striderLogo" src="/Strider-Logo.png"></img></Navbar.Brand>
      </Navbar>
    </div>
  )
}
