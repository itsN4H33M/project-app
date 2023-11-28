import React, { useEffect, useState } from 'react'
import avatar from '../Assets/pngegg.png'
import { Collapse } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI, editUserAPI } from '../Services/allAPI';

function Profile() {
    const [open, setOpen] = useState(false);

    // for updating profile
    const [userProfile, setUserProfile] = useState({
        username: "", email: "", password: "", profile: "", github: "", linkedin: ""
    })

    // updating image
    const [existingImage, setExistingImage] = useState("")

    // Image preview
    const [preview, setPrview] = useState("")

    const handleProfileUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userProfile
        if (!github || !linkedin) {
            toast.info("Please fill the form completelty")
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ? reqBody.append("profileImage", profile) : reqBody.append("profileImage", existingImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                // api
                const result = await editUserAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    setOpen(!open)
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                }
                else {
                    console.log(result);
                    console.log(result.response.data);
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api
                const result = await editUserAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    setOpen(!open)
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                }
                else {
                    console.log(result);
                    console.log(result.response.data);
                }
            }
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, profile: "", github: user.github, linkedin: user.linkedin })
            setExistingImage(user.profile)
        }
    }, [open])

    useEffect(() => {
        if (userProfile.profile) {
            setPrview(URL.createObjectURL(userProfile.profile))
        }
        else {
            setPrview("")
        }
    }, [userProfile.profile])


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
                        <input style={{ display: 'none' }} type="file" onChange={(e) => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                        {existingImage !== "" ?
                            <img className='w-50' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="profile pic" /> :
                            <img className='w-50' src={preview ? preview : { avatar }} alt="profile pic" />
                        }
                    </label>
                    <input className='form-control mt-5' type="text" placeholder='GitHub' value={userProfile.github} onChange={(e) => setUserProfile({ ...userProfile, github: e.target.value })} />
                    <input className='form-control mt-4' type="text" placeholder='LinkedIn' value={userProfile.linkedin} onChange={(e) => setUserProfile({ ...userProfile, linkedin: e.target.value })} />
                    <button className='btn btn-success mt-4' onClick={handleProfileUpdate}>Update</button>
                </div>
            </Collapse>
            <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        </div>
    )
}

export default Profile