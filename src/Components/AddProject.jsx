import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';

function AddProject() {

  const [token, setToken] = useState("")

  // state to store img url
  const [preview, setPreview] = useState("")

  // state for project details
  const [projectDetails, setprojectDetails] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
  })

  // project image url
  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  // jwt token get to state
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'))
    }
    else {
      setToken('')
    }
  }, [])

  // console.log(projectDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setprojectDetails({
      title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })
    setPreview("")
  };

  const handleShow = () => setShow(true);

  // project add button
  const handleAdd = async (e) => {
    const { title, languages, overview, github, website, projectImage } = projectDetails
    if (!title || !languages || !overview || !github || !website || !projectImage) {
      toast.info("Please fill the form completely!!")
    }
    else {
      // making the body form-data not as json cause a file upload is happening
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImage", projectImage)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProjectAPI(reqBody, reqHeader)
        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          alert("Project added")
        }
        else {
          console.log(result);
          toast.warning(`Error-- ${result.response.data}`);
        }
      }
    }
  }

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
                <input type="file" style={{ display: 'none' }} onChange={(e) => { setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] }) }} />
                <img className='w-100' src={preview ? preview :
                  "https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg"
                } alt="project pic" />
              </label>
            </div>
            <div className='col'>
              <input className='my-3 form-control' type="text" placeholder='Project Title' value={projectDetails.title} onChange={(e) => { setprojectDetails({ ...projectDetails, title: e.target.value }) }} />
              <input className='mb-3 form-control' type="text" placeholder='Languages Used' value={projectDetails.languages} onChange={(e) => { setprojectDetails({ ...projectDetails, languages: e.target.value }) }} />
              <input className='mb-3 form-control' type="text" placeholder='GitHub Link' value={projectDetails.github} onChange={(e) => { setprojectDetails({ ...projectDetails, github: e.target.value }) }} />
              <input className='mb-3 form-control' type="text" placeholder='Website Link' value={projectDetails.website} onChange={(e) => { setprojectDetails({ ...projectDetails, website: e.target.value }) }} />
              <input className='mb-3 form-control' type="text" placeholder='Project Overview' value={projectDetails.overview} onChange={(e) => { setprojectDetails({ ...projectDetails, overview: e.target.value }) }} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
    </div>
  )
}

export default AddProject