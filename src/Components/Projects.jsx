import React from 'react'
import AddProject from './AddProject'

function Projects() {
  return (
    <div className='card shadow p-2'>
      <div className='d-flex align-items-center'>
        <h3>My Projects</h3>
        <div className='ms-auto'>
          <AddProject />
        </div>
      </div>
      {/* collection of user projects */}
      <div className='d-flex border border-1 align-items-center p-1 mt-4'>
        <h5>Project Title</h5>
        <div className='icon ms-auto'>
          <button className='btn'><i className="fa-regular fa-pen-to-square fa-xl"></i></button>
          <button className='btn'><i className="fa-brands fa-github fa-xl"></i></button>
          <button className='btn'><i className="fa-regular fa-trash-can fa-xl"></i></button>
        </div>
      </div>
      <p className='text-danger mt-3'>No projects uploaded yet</p>
    </div>
  )
}

export default Projects