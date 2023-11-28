import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({ insideDashboard }) {

    const navigate = useNavigate()

    // context
    const { isAuthorised, setIsAuthorised } = useContext(tokenAuthorisationContext)

    const handleLogout = () => {
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuthorised(false)
        // navigate to home
        navigate('/')
    }

    return (
        <div>
            <Navbar className='bg-primary fixed-top'>
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} className='text-decoration-none text-white'><i className="fa-sharp fa-solid fa-swatchbook fa-rotate-90 text-light"></i>{'  '}Project Fair</Link>
                    </Navbar.Brand>
                    {
                        insideDashboard && <button onClick={handleLogout} className='btn btn-danger'>Log out</button>
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header