import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaFacebookF, FaTwitter, FaTelegramPlane} from "react-icons/fa";

export default function Header() {
  return (
    <div className="Header">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>           
              <Image src="/assets/images/logo.png" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <a href="/#calculate" className="px-3 text-white nav-link">Pricing</a>
                <Link to="/proof"  className="px-3 text-white nav-link">Proof</Link>
                <a href="#aboutus"  className="px-3 text-white nav-link">About us</a>
                <Link to="/referral"  className="px-3 text-white nav-link">Referral program</Link>
                <Link to="/faq"  className="px-3 text-white nav-link">Faq</Link>
                <Link to="/contact"  className="px-3 text-white nav-link">Contact</Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link className="px-3 text-white"><FaFacebookF/></Nav.Link>
                <Nav.Link className="px-3 text-white"><FaTwitter/></Nav.Link>
                <Nav.Link className="px-3 text-white"><FaTelegramPlane/></Nav.Link>
            </Nav>
            <Nav className="ms-auto border rounded-pill px-3">
                <Link to="/signin" className="text-white nav-link">Login</Link>
                <span className="nav-link">OR</span>
                <Link to="/signup" className="text-white nav-link">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
