import React from 'react'
import { Link } from 'react-router-dom'
import login from '../Assets/login.png'
import { Form } from 'react-bootstrap'

function Auth({ register }) {

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
                                        <Form.Control type="text" placeholder="Enter Username" />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>

                                {
                                    isRegisterForm ?
                                        <div>
                                            <button className='btn btn-success mt-4 mb-2'>Register</button>
                                            <p>Already have an account ? <Link to={'/login'}>Click Here</Link></p>
                                        </div> :
                                        <div>
                                            <button className='btn btn-success mt-4 mb-2'>Login</button>
                                            <p>Don't have an account ? <Link to={'/register'}>Click Here</Link></p>
                                        </div>

                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth