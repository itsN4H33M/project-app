import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import titleImg from '../Assets/project.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {

  const [loggedin, setLoggedin] = useState(false)

  // to check at start of page whther token exist and if true updates the state above
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedin(true)
    }
  }, [])

  return (
    <>
      {/* landing section */}
      <div style={{ height: '100vh' }} className='container-fluid'>
        <Row className='align-items-center ps-5 h-100'>
          <Col sm={12} md={6}>
            <h1>
              <i className="fa-sharp fa-solid fa-swatchbook fa-rotate-90"></i>{'  '}Project Fair
            </h1>
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt voluptates esse! Ducimus sapiente eum animi perspiciatis tenetur itaque voluptas, veritatis similique voluptates amet provident a, repellendus, placeat vero obcaecati.</p>
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid incidunt voluptates esse! Ducimus sapiente eum animi perspiciatis tenetur itaque voluptas, veritatis similique voluptates amet provident a, repellendus, placeat vero obcaecati.</p>
            <div className='position-relative m-5'>
              {
                !loggedin ?
                  <Link to={'/login'} className="btn btn-success position-absolute top-0 end-0 ">Explore</Link> :
                  <Link to={'/dashboard'} className="btn btn-success position-absolute top-0 end-0 ">Manage Projects</Link>
              }
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img className='w-100' src={titleImg} alt="Title" />
          </Col>
        </Row>
      </div>

      {/* projects */}
      <div className='all-projects'>
        <h2 className='text-center'>Explore Our Projects</h2>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee scrollAmount={10}>
          <div className='d-flex mt-5' >
            <div style={{ width: '400px' }}><ProjectCard /></div>
          </div>
        </marquee>
        <div className='text-center mt-5'>
          <Link className='text-success' to={'/projects'}>View more projects</Link>
        </div>
      </div>
    </>
  )
}

export default Home