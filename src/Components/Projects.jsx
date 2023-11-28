import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deletePojectAPI, userProjectsAPI } from '../Services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare'
import EditProject from './EditProject'
import { toast } from 'react-toastify'

function Projects() {

  const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext)
  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
  const [userProjects, setUserProjects] = useState([])

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await userProjectsAPI(reqHeader)

      if (result.status === 200) {
        setUserProjects(result.data)
      }
      else {
        console.log(result);
      }
    }
  }

  // delete project
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await deletePojectAPI(id, reqHeader)
    if (result.status === 200) {
      // page reload
      getUserProjects()
    }
    else {
      toast.error(result.response.data)
    }
  }

  useEffect(() => {
    getUserProjects()
  }, [addProjectResponse, editProjectResponse])

  console.log(userProjects);

  return (
    <div className='card shadow p-2'>
      <div className='d-flex align-items-center'>
        <h3>My Projects</h3>
        <div className='ms-auto'>
          <AddProject />
        </div>
      </div>
      {/* collection of user projects */}
      {
        userProjects?.length > 0 ? userProjects.map((project) => (
          <div className='d-flex border border-1 align-items-center p-1 mt-4'>
            <h5>{project.title}</h5>
            <div className='d-flex icon ms-auto'>
              <EditProject project={project} />
              <a href={`${project.github}`} target='_blank' className='btn'><i className="fa-brands fa-github fa-xl"></i></a>
              <button onClick={() => handleDelete(project._id)} className='btn'><i className="fa-regular fa-trash-can fa-xl"></i></button>
            </div>
          </div>
        )) : <p className='text-danger mt-3'>No projects uploaded yet</p>
      }


    </div>
  )
}

export default Projects