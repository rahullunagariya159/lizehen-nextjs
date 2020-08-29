import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function Achievement(props) {
  const [startCount, setStartCount] = useState(false);

  const handleScroll = async () => {
    if (window.scrollY > 1750) {
      await setStartCount(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <section className="section bg-light pt-5">
        <Container>
          <Row id="counter">
            <Col lg={5}>
              <div className="counter-info mt-4">
                <h3>A focused Lizehen with a specialized skill set</h3>
                <p className="text-muted mt-4">
                  Praesent libero nisi,consequat vitae felis vitae pharetra
                  tincidunt augue Duis ligula ligula pharetra a mauris eu
                  euismod cursus velit.
                </p>
                <div className="mt-4">
                  <Link href="#">
                    <a className="btn btn-primary">
                      Learn More <i className="mdi mdi-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row>
                <Col lg={6}>
                  <div className="counter-box mt-4">
                    <div className="media box-shadow bg-white p-4 rounded">
                      <div className="counter-icon mr-3">
                        <i className="mdi mdi-gift text-primary h2" />
                      </div>
                      <div className="media-body pl-2">
                        <h3 className="counter-count">
                          {" "}
                          <div>
                            {startCount ? (
                              <CountUp
                                start={0}
                                end={370}
                                delay={0}
                                duration={10}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className="counter-value"
                                  ></span>
                                )}
                              </CountUp>
                            ) : (
                              0
                            )}{" "}
                            +
                          </div>
                        </h3>
                        <h5 className="mt-2 mb-0 f-17">Happy Clients </h5>
                        <p className="text-muted mb-0 mt-2 f-15">
                          Consequat vitae felis vitae pharetra tincidunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="counter-box mt-4">
                    <div className="media box-shadow bg-white p-4 rounded">
                      <div className="counter-icon mr-3">
                        <i className="mdi mdi-progress-download text-primary h2" />
                      </div>
                      <div className="media-body pl-2">
                        <h3 className="counter-count">
                          {" "}
                          {startCount ? (
                            <CountUp start={0} end={2} delay={0} duration={14}>
                              {({ countUpRef }) => (
                                <span
                                  ref={countUpRef}
                                  className="counter-value"
                                ></span>
                              )}
                            </CountUp>
                          ) : (
                            0
                          )}{" "}
                          M
                        </h3>
                        <h5 className="mt-2 mb-0 f-17">Download </h5>
                        <p className="text-muted mb-0 mt-2 f-15">
                          Consequat vitae felis vitae pharetra tincidunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={6}>
                  <div className="counter-box mt-4">
                    <div className="media box-shadow bg-white p-4 rounded">
                      <div className="counter-icon mr-3">
                        <i className="mdi mdi-emoticon-outline text-primary h2" />
                      </div>
                      <div className="media-body pl-2">
                        <h3 className="counter-count">
                          {" "}
                          {startCount ? (
                            <CountUp
                              start={0}
                              end={45000}
                              delay={0}
                              duration={8}
                            >
                              {({ countUpRef }) => (
                                <span
                                  ref={countUpRef}
                                  className="counter-value"
                                ></span>
                              )}
                            </CountUp>
                          ) : (
                            0
                          )}{" "}
                          +
                        </h3>
                        <h5 className="mt-2 mb-0 f-17">Happy Users </h5>
                        <p className="text-muted mb-0 mt-2 f-15">
                          Consequat vitae felis vitae pharetra tincidunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="counter-box mt-4">
                    <div className="media box-shadow bg-white p-4 rounded">
                      <div className="counter-icon mr-3">
                        <i className="mdi mdi-timer text-primary h2" />
                      </div>
                      <div className="media-body pl-2">
                        <h3 className="counter-count">
                          {startCount ? (
                            <CountUp start={0} end={5} delay={0} duration={14}>
                              {({ countUpRef }) => (
                                <span
                                  ref={countUpRef}
                                  className="counter-value"
                                ></span>
                              )}
                            </CountUp>
                          ) : (
                            0
                          )}{" "}
                          +
                        </h3>
                        <h5 className="mt-2 mb-0 f-17">Years of expe. </h5>
                        <p className="text-muted mb-0 mt-2 f-15">
                          Consequat vitae felis vitae pharetra tincidunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Achievement;
