import React, { useEffect, useState } from 'react'
import Header from '../Components/Header.jsx'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard.jsx'
import { allProjectsAPI } from '../Services/allAPI.js'

function Projects() {
  // to store api response
  const [allProjects, setAllProjects] = useState([])

  // for search
  const [searchKey, setSearchKey] = useState('')

  const getallProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await allProjectsAPI(searchKey, reqHeader)
      if (result.status === 200) {
        setAllProjects(result.data)
      } else {
        console.log(result);
      }
    }
  }
  // to render based on searckey state and others
  useEffect(() => {
    getallProjects()
  }, [searchKey])

  return (
    <div>
      <Header />
      <div style={{ marginTop: '100px' }}>
        <h2 className='text-center'>All Projects</h2>
        {/* search */}
        <div className='d-flex justify-content-center align-items-center my-5'>
          <div className='d-flex align-items-center w-50 border border-1'>
            <input type="text" className='form-control' placeholder='Search projects by technology used' onChange={(e) => { setSearchKey(e.target.value) }} />
            <i className="fa-solid fa-magnifying-glass fa-xl mx-2"></i>
          </div>
        </div>

        <Row className='my-5 container-fluid'>
          {
            allProjects?.length > 0 ? allProjects?.map((project) => (
              <Col sm={12} md={6} lg={4}>
                <ProjectCard project={project} />
              </Col>
            )) : <p className='text-danger text-center'>Login to view the projects!</p>
          }

        </Row>

      </div>

    </div>
  )
}

export default Projects