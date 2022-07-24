import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="position-relative overflow-hidden">
        <iframe
          className="position-absolute"
          src="/assets/particle/index.html"
          width="100%"
          height={600}
          title="Earth"
        />
        <Container className="py-5">
          <Row className="py-5">
            <Col lg={8} md={8} sm={12} className="py-5">
              <div className="fs-2 fw-bold text-white mt-5 text-start">
                Contact with us!
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white">
        <Container className="py-5">
          <Row>
            <Col lg={6} md={6} sm={12} className="text-start">
              <div className="fs-3 fw-semibold color-primary mt-3">
                Question? Comment?
              </div>
              <div className="color-light-gray mt-3">
                Ask a question or provide feedback about our products and
                services.We feel free to contact us we will gladly answer all
                your questions.
              </div>
              <div className="fs-4 fw-semibold color-primary">Address</div>
              <div className="color-light-gray mt-3">
                CRYPTONITS LTD.
                <br />
                20-22 Wenlock Road
                <br />
                London N1 7GU England
                <br />
                Registration no. 11227919
              </div>
              <div className="fs-4 fw-semibold color-primary">Phone</div>
              <div className="color-light-gray mt-3">
                Reception : 020 8242 6626
              </div>
              <div className="fs-4 fw-semibold color-primary">Email</div>
              <div className="color-light-gray mt-3">office@dualmine.com</div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form >
                <Row>
                    <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Control type="email" placeholder="email address" className="fs-5"/>
                    </Form.Group>
                    <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Control type="email" placeholder="name" className="fs-5"/>
                    </Form.Group>
                    <Form.Group
                    className="mb-3 col-12"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Control type="email" placeholder="title" className="fs-5"/>
                    </Form.Group>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={10} placeholder="Your message" className="fs-5"/>
                </Form.Group>
                <Button className="border rounded-pill py-3 px-5 bg-gradient-r-p btn btn-primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
