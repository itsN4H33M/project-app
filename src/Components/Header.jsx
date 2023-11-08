import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({ insideDashboard }) {
    return (
        <div>
            <Navbar className='bg-primary fixed-top'>
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} className='text-decoration-none text-white'><i className="fa-sharp fa-solid fa-swatchbook fa-rotate-90 text-light"></i>{'  '}Project Fair</Link>
                    </Navbar.Brand>
                    {
                        insideDashboard && <button className='btn btn-danger'>Log out</button>
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header