import React from "react";
import { Container, Row, Col } from "reactstrap";
import Typewriter from "typewriter-effect";

function section(props) {
  return (
    <>
      <section className="bg-light" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={9}>
                  <div className="home-content text-center mt-5 pt-5">
                    <div className="home-badge mt-5">
                      <p className="f-13 bg-primary text-white-50">
                        <span className="text-white">70% Off</span> for first 3
                        month
                      </p>
                    </div>
                    <h1 className="mt-3">
                      <Typewriter
                        options={{
                          strings: [
                            "Focus On being More Product with Lizehen",
                            "Focus On being More Product with Lizehen",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h1>
                    <p className="text-muted mt-3 f-20">
                      {" "}
                      Donec iaculis ligula eros none interdum sem fusce
                      <br /> venenaatis nec biendum Susisse potenti.
                    </p>
                    <div className="mt-5">
                      <div className="search-form">
                        <form action="#">
                          <input type="text" placeholder="Email" />
                          <button type="submit" className="btn btn-primary">
                            SubCribe
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="home-img-2">
                      <img
                        src="images/features/img-8.png"
                        className="img-fluid"
                        alt="features-img"
                      />
                    </div>
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
