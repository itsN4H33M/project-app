import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../Assets/login.png'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';

function Auth({ register }) {

    // to use redirection
    const navigate = useNavigate()
    // state to store user registration details
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { isAuthorised, setIsAuthorised } = useContext(tokenAuthorisationContext)

    // registration
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        // console.log(userData)
        if (!username || !email || !password) {
            toast.info("Please fill the form Completely")
        }
        else {
            const result = await registerAPI(userData)
            console.log(result);

            if (result.status === 200) {
                toast.success(`${result.data.username} registered successfully!`)
                setUserData({
                    username: '',
                    email: '',
                    password: ''
                })
                navigate('/login')
            }
            else {
                toast.warning("Failed")
            }
        }

    }

    // Login
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData

        if (!email || !password) {
            toast.info("Please fill the form completely!")
        }
        else {
            const result = await loginAPI(userData)

            if (result.status === 200) {
                sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
                sessionStorage.setItem('token', result.data.token)
                // context
                setIsAuthorised(true)
                setUserData({
                    email: '',
                    password: ''
                })
                navigate('/')
            }
            else {
                toast.warning("failed")
            }
        }
    }

    const isRegisterForm = register ? true : false

    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link className='text-decoration-none' to={'/'}>Back To Home</Link>
                <div className='card shadow p-5 bg-dark'>
                    <div className='row'>
                        {/* image col */}
                        <div className='col-6'>
                            <img className='w-100' src={login} alt="login" />
                        </div>
                        {/* form col */}
                        <div className='col-6'>
                            <div className='d-flex align-items-center flex-column mt-5'>
                                <h1 className='text-success'><i className="fa-sharp fa-solid fa-swatchbook fa-rotate-90 text-light"></i>{'  '}Project Fair</h1>
                                <h5 className='mt-2 text-success'>
                                    {isRegisterForm ? 'Sign up to your Account' : 'Sign in to your Account'}
                                </h5>
                            </div>
                            <Form>
                                {
                                    isRegisterForm &&
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Enter Username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                </Form.Group>

                                {
                                    isRegisterForm ?
                                        <div>
                                            <button className='btn btn-success mt-4 mb-2' onClick={handleRegister}>Register</button>
                                            <p>Already have an account ? <Link to={'/login'}>Click Here</Link></p>
                                        </div> :
                                        <div>
                                            <button className='btn btn-success mt-4 mb-2' onClick={handleLogin}>Login</button>
                                            <p>Don't have an account ? <Link to={'/register'}>Click Here</Link></p>
                                        </div>

                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        </div>
    )
}

export default Auth