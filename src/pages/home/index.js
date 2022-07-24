import React, { StrictMode, useEffect, useState } from "react";
import { Card, Col, Container, Row, Image, Nav, Form, Button } from "react-bootstrap";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { BsCurrencyBitcoin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function HomePage() {
  const [val, setVal] = useState(0.0005);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="HomePage">
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
              <div className="fs-2 fw-bold text-white mt-5">
                Multiply your Bitcoin, Ethereum, Litecoin and Dogecoin
              </div>
              <div className="fs-5 text-white mb-3">
                Start mining and increase your crypto capital now!
              </div>
              <span className="fs-4 fw-semibold text-white bg-gradient-r-p py-1 px-4 border rounded-pill">
                Get 100 GH/s hash power for free on sign up.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <Row className="mt-n5 position-relative card-section">
            <Col lg={4} md={4} sm={12}>
              <Card>
                <Card.Body>
                  <FaBitcoin className="card-icons d-flex align-items-center justify-content-around text-white" />
                  <Card.Title className="color-primary px-3">
                    Bitcoin
                  </Card.Title>
                  <Card.Text className="color-light-gray fs-7 px-3">
                    The bigest cryptocurrency, number one on market. Bitcoin is
                    the first open-source, decentralized and most popular
                    cryptocurrency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Card>
                <Card.Body>
                  <Image
                    className="card-icons d-flex align-items-center justify-content-around text-white"
                    src="/assets/images/dual_icon.png"
                  />
                  <Card.Title className="color-primary px-3">
                    Bitcoin
                  </Card.Title>
                  <Card.Text className="color-light-gray fs-7 px-3">
                    The bigest cryptocurrency, number one on market. Bitcoin is
                    the first open-source, decentralized and most popular
                    cryptocurrency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Card>
                <Card.Body>
                  <FaEthereum className="card-icons d-flex align-items-center justify-content-around text-white" />
                  <Card.Title className="color-primary px-3">
                    Ethereum
                  </Card.Title>
                  <Card.Text className="color-light-gray fs-7 px-3">
                    The second bigest cryptocurrency on market. Ethereum is a
                    decentralized platform that runs reliable smart contracts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <div className="fs-2 fw-semibold color-primary text-center">
              How it work?
            </div>
            <Row>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-right"
              >
                <Image src="/assets/images/icon_1.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-up"
              >
                <Image src="/assets/images/icon_2.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-left"
              >
                <Image src="/assets/images/icon_3.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-right"
              >
                <Image src="/assets/images/icon_4.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-up"
              >
                <Image src="/assets/images/icon_5.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                className="text-center my-5"
                data-aos="fade-left"
              >
                <Image src="/assets/images/icon_6.png" height="80" />
                <div className="fs-5 color-primary">
                  You register on DUALMINE
                </div>
                <div className="fs-7 color-light-gray">
                  It takes only 1minutes
                </div>
              </Col>
            </Row>
            <Row className="justify-content-around mt-5">
              <Col lg={6} md={6} sm={12}>
                <Image src="/assets/images/3years.jpg" width="100%" />
              </Col>
            </Row>
            <Row className="my-5">
              <div className="fs-2 fw-semibold color-primary text-center">
                Why us?
              </div>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/images/dollar.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary col-md-9">
                  Two monthly payouts
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-left"
              >
                <Image
                  src="/assets/images/watch.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary  col-md-9">
                  First payouts within 24 hours.
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/images/bitcoin.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary  col-md-9">
                  No exchange rate risk only multiply Your coins.
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/images/time.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary  col-md-9">
                  The mining starts immediately after confirmed payment.
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/images/card.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary col-md-9">
                  No hidden fees or comissions.
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                className="d-flex align-items-center justify-content-around my-3 row"
                data-aos="fade-right"
              >
                <Image
                  src="/assets/images/chart.png"
                  width="100"
                  className="col-md-3"
                />
                <div className="fs-5 color-primary col-md-9">
                  Earn more with our refferal program.
                </div>
              </Col>
            </Row>
            <Row className="justify-content-around mt-5">
              <Col lg={6} md={6} sm={12}>
                <Image src="/assets/images/anniversary4.jpg" width="100%" />
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <div className="position-relative overflow-hidden">
        <iframe
          className="position-absolute start-0"
          src="/assets/particle/index.html"
          width="100%"
          height={550}
          title="Earth"
        />
        <Container className="py-5" id="calculate">
          <div className="fs-1 fw-semibold text-white">Calculate</div>
          <div className="fs-5 fw-semibold text-white">
            New order - current estimated profit!
          </div>
          <div className="fs-6 text-white d-flex align-items-center flex-wrap">
            Choose currency :
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Bitcoin+</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Bitcoin</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Ethereum</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Cryptonits</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Litecoin</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Bitcoin cash</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Dash</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Dogecoin</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Zcash</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Monero</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center border-end border-2 py-0 my-2">
              <FaBitcoin className="me-2" />
              <span>Ethereum Classic</span>
            </Nav.Link>
            <Nav.Link className="text-white border-end d-flex align-items-center py-0">
              <FaBitcoin className="me-2" />
              <span>Bitcoin Gold</span>
            </Nav.Link>
          </div>
          <Row>
            <Col lg={6} md={6} sm={12} className="pe-0">
              <Card>
                <Card.Body>
                  <div className="fs-2 color-pink">
                    4th Anniversary bouns! Get 25% extra!
                  </div>
                  <div className="fs-5 color-pink">
                    *For example: Order and pay for 100 GH/s and you will get
                    extra 25GH/s
                  </div>
                  <Row className="align-items-center">
                    <Col lg={6} md={6} sm={6} className="fs-4 color-primary">
                      Contract price
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex align-items-center justify-content-end"
                    >
                      <span className="fw-bold fs-4 me-2 color-light-gray">
                        <BsCurrencyBitcoin />
                      </span>
                      <span className="color-light-gray fs-1">0.0005</span>
                    </Col>
                  </Row>
                  <Row className=""></Row>
                  <Row className="justify-content-end">
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex align-items-center justify-content-end"
                    >
                      <span className="fw-bold fs-4 me-2 color-light-gray">
                        <BsCurrencyBitcoin />
                      </span>
                      <span className="color-light-gray fs-1">0.0005</span>
                    </Col>
                  </Row>
                  <Row>
                    <div className="fs-4 color-light-gray text-center">
                      1 Bitcoin is worth current: <strong>22689.12$</strong>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12} className="ps-0">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg={3} md={3} sm={3} className="color-primary fs-3">
                                Power
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <span className="fs-3 color-light-gray px-2">GH /s</span>
                                <span className="fs-1 color-light-gray fw-semibold px-2">660.07</span>
                                <span className="fs-3 color-pink px-2"><strong>+25%</strong></span>
                            </Col>
                            <Col lg={12} md={12} sm={12} className="color-light-gray fs-6 text-center mt-3 mb-2 fw-bold">
                                Current guaranteed profit:
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="color-light-gray">Day: </span>
                            <span className="color-primary fs-4 d-flex align-items-center">0.0001758<BsCurrencyBitcoin/> / 0.40 $</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="color-light-gray">Month: </span>
                            <span className="color-primary fs-4 d-flex align-items-center">0.0001758<BsCurrencyBitcoin/> / 0.40 $</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="color-light-gray">Year: </span>
                            <span className="color-primary fs-4 d-flex align-items-center">0.0001758<BsCurrencyBitcoin/> / 0.40 $</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <span className="color-light-gray">2 Year: </span>
                            <span className="color-primary fs-4 d-flex align-items-center">0.0001758<BsCurrencyBitcoin/> / 0.40 $</span>
                        </div>
                        <div className="fw-bold text-center color-pink">*Every contract work for 2 years.</div>
                        <div className="text-center">
                            <Button className="bg-gradient-r-p py-3 px-5 border rounded-pill mt-3">Buy bitcoin+ contract now!</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white py-5" id="aboutus">
        <Container>
          <div className="fs-1 fw-semibold color-primary text-center">
            We are passionate of cryptocurrency and blockchain technology.
          </div>
          <div className="fs-5 color-light-gray text-center">
            Our service makes mining accessible to everyon. We believe in the
            future of cryptocurrencies and we love to be part of this growing
            community. Our dual mining system is suitable for those who are new
            to the world of cryptocurrencies and looking for easy way to invest
            money.
          </div>
          <Row className="py-5 align-items-center">
            <Col lg={3} md={3} sm={12}>
              <div className="py-5">
                <Image
                  className="rounded-circle border"
                  src="/assets/images/lukasz_borzeszkowski.jpg"
                />
              </div>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <div className="fs-1 text-center color-pink">
                "With us You will have more coins tomorrow than yesterday."
              </div>
              <div className="fs-5 color-light-gray text-center">
                Lukasz Borzeszkowski
                <br />
                CEO BUALMINE
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5 bg-light-sky">
        <Container>
          <div className="fs-1 fw-semibold text-white text-center">
            Available hash power
          </div>
          <Row className="d-flex justify-content-around">
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "88%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Bitcoin+
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "92%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Bitcoin
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "90%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Ethereum
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "93%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Cryptonits
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "89%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Litecoin
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "92%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Bitcoin cash
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "85%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Dash
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "94%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Dogecoin
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "85%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Zcash
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "84%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Monero
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "90%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Ethereum Classic
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={12} className="my-2">
              <div className="progress-wrapper">
                <div
                  className="progress-bar progress-bar-width"
                  data-progress-bar-percent={100}
                  style={{ width: "79%" }}
                >
                  <div className="progress-bar-anim text-center fs-4">
                    <FaBitcoin className="me-2" />
                    Bitcoin Gold
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
