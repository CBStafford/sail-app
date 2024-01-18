"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { useSession } from "next-auth/react"


import { signOut } from 'next-auth/react'

import Link from 'next/link'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavLinks(){
    const { data: session, status } = useSession();
    
    const HandleLogOut = () => {
        // console.log("Clicked!!!!!")
        localStorage.clear();
        process.env.LAR_TOKEN = null;
        process.env.LAR_USER = null;
        signOut({ redirect: true, callbackUrl:"/"})
    }
 
    const unAuthLinks = (
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home </Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="/api/auth/signin" >Login</Nav.Link> | &nbsp;
                            <Nav.Link href="/register" >Register</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>);

    const authLinks = (
        <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home </Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link onClick={HandleLogOut} >LogOut</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>);

   return(<> {status === "authenticated" ? authLinks : unAuthLinks } </>)
}   

