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
        <Navbar
          key={expand}
          bg='dark'
          expand={expand}
          variant='dark'
          className='mb-3'
        >
          <Container fluid>
            <Navbar.Brand
              href='#'
              className='tp_nav text-uppercase px-4 text-danger'
            >
              tour places
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
              className='bg-info text-danger wid'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="h-offcanvas">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='n_nav justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1' className='nav_link'>
                    about us
                  </Nav.Link>
                  <Nav.Link href='#action2' className='nav_link'>
                    for you
                  </Nav.Link>
                  <Nav.Link href='#action3' className='nav_link'>
                    services
                  </Nav.Link>
                  <Nav.Link href='#action4' className='nav_link'>
                    blog
                  </Nav.Link>
                  <Nav.Link href='#action5' className='nav_link'>
                    vlog
                  </Nav.Link>
                  <Nav.Link href='#action6' className='nav_link'>
                    contact
                  </Nav.Link>
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
