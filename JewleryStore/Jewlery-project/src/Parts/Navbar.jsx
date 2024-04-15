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
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand={expand} className="bg-body-tertiary mb-3" style={{}}>
        <Container fluid>

          <Navbar.Brand href="/Cart">
            <MdOutlineShoppingBag style={{ fontSize: '2.2rem', color: 'white' }} />
          </Navbar.Brand>

          <Navbar.Brand href="/"><GiBigDiamondRing style={{ fontSize: '2.2rem'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <GiBigDiamondRing style={{ fontSize: '2rem'}}/>
                    
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
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <Link className='menuBtn' to={"/"}>Home</Link>
                <Link className='menuBtn' to={"/Shop"}>Shop</Link>
                <Link className='menuBtn' to={"/Cart"}>Cart</Link>

                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;

