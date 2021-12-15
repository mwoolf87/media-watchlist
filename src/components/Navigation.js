import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../CSS/NavBar.css";


export default function Navigation() {
    return (
        <Container className="navbar">
            <Navbar className="nav-links" expand="lg" variant="dark" bg="dark">
                    <Link className="m-3" to="/">Home</Link>
                    <Link className="m-3" to="/watchlist">Watchlist</Link>
                    <Link className="m-3" to="/favorites">Favorites</Link>
                    <Link className="m-3" to="/aboutus">AboutUs</Link>
                    <Link className="m-3" to="/dashboard">Dashboard</Link>
                    <Link className="m-3" to="/test">Test</Link>

            </Navbar>
        </Container>

    )
}
