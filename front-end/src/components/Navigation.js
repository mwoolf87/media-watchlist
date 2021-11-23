import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Container>
            <Navbar className="nav-links" expand="lg" variant="dark" bg="dark">
                    <Link to="/">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
            </Navbar>
        </Container>

    )
}
