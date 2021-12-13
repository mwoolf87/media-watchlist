import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../CSS/NavBar.css";


export default function Navigation() {
    return (
        <Container>
            <Navbar className="nav-links" expand="lg" variant="dark" bg="dark">
                    <Link className="m-1" to="/">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/about">AboutUs</Link>
                    <Link to="/test">Test</Link>
            </Navbar>
        </Container>

    )
}
