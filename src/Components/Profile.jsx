import React, { useState } from 'react'
import avatar from '../Assets/pngegg.png'
import { Collapse } from 'react-bootstrap';

function Profile() {
    const [open, setOpen] = useState(false);

    return (
        <div className='card shadow p-5'>
            <div className='d-flex justify-content-between'>
                <h4>My Profile</h4>
                <button onClick={() => setOpen(!open)} className='btn btn-outline-primary'>
                    <i className="fa-solid fa-chevron-down" style={{ color: "#00ff40" }}></i>
                </button>
            </div>
            {/* profile pic */}

            <Collapse in={open}>
                <div className="row">
                    <label className='text-center mt-4'>
                        <input style={{ display: 'none' }} type="file" />
                        <img className='w-50' src={avatar} alt="profile pic" />
                    </label>
                    <input className='form-control mt-5' type="text" placeholder='GitHub' />
                    <input className='form-control mt-4' type="text" placeholder='LinkedIn' />
                    <button className='btn btn-success mt-4'>Update</button>
                </div>
            </Collapse>

        </div>
    )
}

export default Profile