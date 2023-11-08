import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Add Project</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col'>
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img className='w-100' src="https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg" alt="project pic" />
              </label>
            </div>
            <div className='col'>
              <input className='my-3 form-control' type="text" placeholder='Project Title' />
              <input className='mb-3 form-control' type="text" placeholder='Languages Used' />
              <input className='mb-3 form-control' type="text" placeholder='GitHub Link' />
              <input className='mb-3 form-control' type="text" placeholder='Website Link' />
              <input className='mb-3 form-control' type="text" placeholder='Project Overview' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject