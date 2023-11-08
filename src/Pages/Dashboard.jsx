import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import Projects from '../Components/Projects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard />
      <div style={{ marginTop: '100px' }}>
        <Row className='container-fluid'>
          {/* my projects */}
          <h2>Welcome <span>User</span></h2>
          <Col sm={12} md={8}>
            <Projects />
          </Col>
          {/*profile*/}
          <Col sm={12} md={4}>
            <Profile />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard