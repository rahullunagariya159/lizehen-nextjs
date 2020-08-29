import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import ParticlesContainer from "../../components/ParticlesContainer/ParticlesContainer ";

function section(props) {
  return (
    <>
      <section className="bg-home bg-home-3" id="home">
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <Container className="slidero">
              <Row className="align-items-center justify-content-center">
                <Col lg={6}>
                  <div className="home-content text-center">
                    <h1 className="home-title text-white">
                      We're <span className="text-primary">Creative </span>{" "}
                      <br /> Agency Expert.
                    </h1>
                    <h5 className="text-primary mt-3">
                      Best Solution Your Business.{" "}
                    </h5>
                    <p className="text-white-50 mt-4 f-20">
                      {" "}
                      Donec iaculis ligula eros none interdum sem fusce
                      <br /> venenaatis nec biendum Susisse potenti.
                    </p>
                    <div className="mt-5">
                      <Link href="/index-3">
                        <a className="btn btn-primary">Start Free Trial</a>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <ParticlesContainer />
      </section>
    </>
  );
}

export default section;
