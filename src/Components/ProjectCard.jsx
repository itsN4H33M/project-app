import React, { useState } from 'react'
import { Card, Modal, Col, Row } from 'react-bootstrap'
import projectPic from '../Assets/smapleProject.png'

function ProjectCard() {
  // modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* card */}
      <Card className='mx-5 btn shadow' onClick={handleShow}>
        <Card.Img variant="top" src={projectPic} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img className='w-100' src={projectPic} alt="Project" /></Col>
            <Col>
              <h2>Project title</h2>
              <p>Project overview: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero nostrum autem aliquam officia ad veritatis illum esse incidunt eaque perferendis maiores?</p>
              <p>Technologies used: <span className='fw-bolder'>HTML, CSS, REACT</span></p>
              <div className='d-flex justify-content-evenly mt-4'>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://github.com/" target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://vercel.com/naheems-projects" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i></a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProjectCard