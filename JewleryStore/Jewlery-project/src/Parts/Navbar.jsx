import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiBigDiamondRing } from "react-icons/gi";



function MyNavBar() {
  // Set the desired expand value
  const expand = false;

  return (
    <>
      <Navbar style={{ height: '5rem' }} bg="dark" data-bs-theme="dark" sticky="top" expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Link className='menuBtn' to={"/Cart"}>
              <MdOutlineShoppingBag style={{ fontSize: '2.4rem', color: 'white' }} />
            </Link>
          </Navbar.Brand>

          <Navbar.Brand >
            <Link className='menuBtn' to={"/"}><GiBigDiamondRing style={{ fontSize: '2.2rem', color: 'white' }} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <GiBigDiamondRing style={{ fontSize: '2rem' }} />

              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              <Nav style={{marginTop:'3rem'}} className="justify-content-end flex-grow-1 pe-3">

                <Link style={{margin:'1rem'}} className='menuBtn' to={"/"}>Home</Link>
                <Link style={{margin:'1rem'}} className='menuBtn' to={"/Shop"}>Shop</Link>
                <Link style={{margin:'1rem'}} className='menuBtn' to={"/Cart"}>Cart</Link>                
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;

