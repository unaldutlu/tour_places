import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

function Navbarr() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg='dark' expand={expand} variant="dark" className='mb-3'>
          <Container fluid>
            <Navbar.Brand href='#' className='text-uppercase'>
              tour places
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='n_nav justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1'>about us</Nav.Link>
                  <Nav.Link href='#action2'>for you</Nav.Link>
                  <Nav.Link href='#action3'>services</Nav.Link>
                  <Nav.Link href='#action4'>blog</Nav.Link>
                  <Nav.Link href='#action5'>vlog</Nav.Link>
                  <Nav.Link href='#action6'>contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;
