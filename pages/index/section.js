import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function section(props) {
  return (
    <>
      <section className="bg-home" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="home-content">
                    <div className="home-badge">
                      <p className="f-13">
                        <span className="text-primary">70% Off</span> for first
                        3 month
                      </p>
                    </div>
                    <h1 className="home-title">
                      Make more time for the work that matters most
                    </h1>
                    <p className="text-muted mt-3 f-20">
                      {" "}
                      Donec iaculis ligula eros none interdum sem fusce
                      <br /> venenaatis nec biendum Susisse potenti.
                    </p>
                    <div className="mt-5">
                      <Link href="/">
                        <a className="btn btn-primary">
                          Get Started{" "}
                          <span className="text-white-50">- For Free</span>{" "}
                          <i className="mdi mdi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="home-img">
                    <img
                      src="images/features/img-2.png"
                      className="img-fluid"
                      alt="home-img"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}

export default section;
