import React, { useState } from 'react'
import { Card, Modal, Col, Row } from 'react-bootstrap'
import projectPic from '../Assets/smapleProject.png'
import { BASE_URL } from '../Services/baseurl';

function ProjectCard({ project }) {
  // modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* card */}
      {
        project &&
        <Card className='mx-5 btn shadow' onClick={handleShow}>
          <Card.Img variant="top" src={project ? `${BASE_URL}/uploads/${project.projectImage}` : projectPic} />
          <Card.Body>
            <Card.Title>{project?.title}</Card.Title>
          </Card.Body>
        </Card>
      }


      {/* modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img className='w-100' src={project ? `${BASE_URL}/uploads/${project.projectImage}` : projectPic} alt="Project" /></Col>
            <Col>
              <h2>{project?.title}</h2>
              <p>{project?.overview}</p>
              <p>Technologies used: <span className='fw-bolder'>{project?.languages}</span></p>
              <div className='d-flex justify-content-evenly mt-4'>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href={project?.github} target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href={project?.website} target='_blank'><i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i></a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProjectCard