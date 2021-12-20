import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../CSS/NavBar.css";


export default function Navigation() {
    return (
        <Container className="navbar">
            <Navbar className="nav-links" expand="lg">
                    <Link className="m-3" to="/medialist">Home</Link>
                    <Link className="m-3" to="/watchlist">Watchlist</Link>
                    <Link className="m-3" to="/dashboard">Dashboard</Link>
                    <Link className="m-3" to="/about">About </Link>
            </Navbar>
        </Container>

    )
}
