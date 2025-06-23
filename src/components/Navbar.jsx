import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiCart } from 'react-icons/bi';
import { BsLock } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';

export const NavbarMenu = () => {
  const total = 25000;
  const token = false; 
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex justify-content-start">
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="me-auto">
          {/* Home */}
          <Nav.Link
            href="#home"
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '8px',
              background: '#333',
              textDecoration: 'none',
              marginRight: '20px',
              transition: 'background 0.3s ease',
            }}
          >
            <FaHome style={{ marginRight: '5px' }} /> Home
          </Nav.Link>

          {token ? (
            <>
              {/* Profile */}
              <Nav.Link
                href="#profile"
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#333',
                  textDecoration: 'none',
                  marginRight: '20px',
                  transition: 'background 0.3s ease',
                }}
              >
                <FaUser style={{ marginRight: '5px' }} /> Profile
              </Nav.Link>

              {/* Logout */}
              <Nav.Link
                href="#logout"
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#333',
                  textDecoration: 'none',
                  marginRight: '20px',
                  transition: 'background 0.3s ease',
                }}
              >
                <CiLogout style={{ marginRight: '5px' }} /> Logout
              </Nav.Link>
            </>
          ) : ( 
            <>
              {/* Login */}
              <Nav.Link
                href="#login"
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#333',
                  textDecoration: 'none',
                  marginRight: '20px',
                  transition: 'background 0.3s ease',
                }}
              >
                <BsLock style={{ marginRight: '5px' }} /> Login
              </Nav.Link>

              {/* Register */}
              <Nav.Link
                href="#register"
                style={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#333',
                  textDecoration: 'none',
                  marginRight: '20px',
                  transition: 'background 0.3s ease',
                }}
              >
                <BsLock style={{ marginRight: '5px' }} /> Register
              </Nav.Link>
            </>
          )}
        </Nav>

        {/* Carrito */}
        <Nav>
          <Nav.Link
            href="#cart"
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '8px',
              background: '#333',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
          >
            <BiCart style={{ marginRight: '5px' }} /> Total: ${total.toLocaleString('es-CL')}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};