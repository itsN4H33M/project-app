import React from 'react'
import Header from '../Components/Header.jsx'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard.jsx'

function Projects() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '100px' }}>
        <h2 className='text-center'>All Projects</h2>
        {/* search */}
        <div className='d-flex justify-content-center align-items-center my-5'>
          <div className='d-flex align-items-center w-50 border border-1'>
            <input type="text" className='form-control' placeholder='Search projects by technology used' />
            <i className="fa-solid fa-magnifying-glass fa-xl mx-2"></i>
          </div>
        </div>
        <Row className='my-5'>
            <Col sm={12} md={6} lg={4}> 
              <ProjectCard />
            </Col>
          </Row>
      </div>

    </div>
  )
}

export default Projects