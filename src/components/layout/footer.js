import React from "react";
import { Button, Col, Container, Row, Image, Nav } from "react-bootstrap";
import {FaFacebookF, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer bg-white py-5">
      <Container>
        <Row className="justify-content-between align-items-center mb-5">
          <Col lg={8} md={8} sm={12}>
            <small className="color-light-gray ">Are you ready?</small>
            <div className="fs-3 mt-2 fw-bold color-primary">
              Get 100 GH/s hash power for free on sign up.
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="text-center">
            <Button className="border rounded-pill py-3 px-5 bg-gradient-r-p">
              Start mining!
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-around mb-3 mt-5">
          <Col lg={8} md={8} sm={12}>
            <Image src="/assets/images/gif2.gif" width="100%" />
          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <Col lg={3} md={3} sm={12} >
            <div className="fs-5 mb-2 color-primary">Contact</div>
            <div className="fs-6 mb-2 color-light-gray">
              CRYPTONITS LTD.
              <br /> 20-22 Wenlock Road
              <br /> London N1 7GU England <br /> Registration no. 1127919
            </div>
            <div className="fs-8 color-light-gray">Phone: 020 8242 6626</div>
            <div className="fs-8 color-light-gray">E-mail: office@dualmine.com</div>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <div className="fs-5 mb-2 color-primary">Social</div>
            <div className="fs-6 col-md-12 col-sm-4 color-primary"><span><FaFacebookF/></span></div>
            <div className="fs-6 col-md-12 col-sm-4 color-primary"><span><FaTwitter/></span></div>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <div className="fs-5 mb-2 color-primary">Payments</div>
            <Image src="/assets/images/payments_icons.jpg" />
          </Col>
          <Col lg={3} md={3} sm={12}>
            <div className="fs-5 mb-2 color-primary">Security</div>
            <Image src="/assets/images/security_icons.jpg" />
          </Col>
        </Row>
        <Row className="justify-content-around align-items-center fs-7 my-2">
          <Col lg={2} md={2} sm={12} className="color-light-gray">
            ©2018 dualmine.com
          </Col>
          <Col
            lg={5}
            md={5}
            sm={12}
            className="d-flex align-items-center justify-content-between"
          >
            <Nav.Link className="color-light-gray ">Terms of Use</Nav.Link>
            <Nav.Link className="color-light-gray ">Disclaimer</Nav.Link>
            <Nav.Link className="color-light-gray ">Privacy Policy</Nav.Link>
            <Nav.Link className="color-light-gray ">Proof of legal</Nav.Link>
          </Col>
        </Row>
        <hr className="my-5"/>
        <Row className="justify-content-around mt-3">
          <Col
            lg={8}
            md={8}
            sm={12}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="fs-4">Equipment We Use : </div>
            <div className="">
              <Image className="px-2" src="/assets/images/amd.jpg" />
              <Image className="px-2" src="/assets/images/nvidia.jpg" />
              <Image className="px-2" src="/assets/images/intel.jpg" />
              <Image className="px-2" src="/assets/images/bitmain.jpg" />
              <Image className="px-2" src="/assets/images/ati.jpg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
