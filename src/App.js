import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/navbar/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import './App.css'

function App () {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  )
}

export default App
