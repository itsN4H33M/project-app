import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../Contexts/ContextShare';

function EditProject({ project }) {

    const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext)

    const [projectDetails, setprojectDetails] = useState({
        id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
    })

    const [preview, setPreview] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setprojectDetails({ id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: "" })
        setPreview("")
    };

    const handleShow = () => setShow(true);

    const handleUpdate = async () => {
        const { id, title, languages, overview, github, website, projectImage } = projectDetails
        if (!title || !languages || !overview || !github || !website) {
            toast.info("Please fill the form completely!!")
        }
        else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("languages", languages)
            reqBody.append("overview", overview)
            reqBody.append("github", github)
            reqBody.append("website", website)
            preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const result = await editProjectAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    handleClose()
                    // pass response to my projects
                    setEditProjectResponse(result.data)
                }
                else {
                    console.log(result);
                    toast.error(result.response.data)
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const result = await editProjectAPI(id, reqBody, reqHeader)
                if (result.status === 200) {
                    handleClose()
                    // pass response to my projects
                    setEditProjectResponse(result.data)
                }
                else {
                    console.log(result);
                    toast.error(result.response.data)
                }
            }
        }
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    return (
        <div>
            <button onClick={handleShow} className='btn'><i className="fa-regular fa-pen-to-square fa-xl"></i></button>
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
                                <img className='w-100' src={preview ? preview : `${BASE_URL}/uploads/${project.projectImage}`} alt="project pic" />
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
                    <Button variant="success" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        </div>
    )
}

export default EditProject