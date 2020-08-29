import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { AvForm, AvField } from "availity-reactstrap-validation";

function section(props) {
  return (
    <>
      <section className="bg-home bg-home-6" id="home">
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
                      <Link href="/index-6">
                        <a className="btn btn-primary">
                          Get Started{" "}
                          <span className="text-white-50">- For Free</span>{" "}
                          <i className="mdi mdi-arrow-right ml-1" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="offset-lg-1">
                  <div className="home-registration-form bg-white p-5 mt-4">
                    <h5 className="form-title mb-4 text-center font-weight-bold">
                      Get 30 day FREE Trial
                    </h5>
                    <AvForm className="registration-form">
                      <label className="text-muted">First Name</label>
                      <AvField
                        type="text"
                        id="exampleInputName1"
                        name="fname"
                        className="form-control mb-4 registration-input-box"
                        errorMessage="Enter First Name"
                        validate={{ required: { value: true } }}
                      />
                      <label className="text-muted">Last Name</label>
                      <AvField
                        type="text"
                        id="exampleInputName2"
                        name="lname"
                        className="form-control mb-4 registration-input-box"
                        errorMessage="Enter Last Name"
                        validate={{ required: { value: true } }}
                      />
                      <label className="text-muted">Email</label>
                      <AvField
                        type="email"
                        id="exampleInputEmail1"
                        name="email"
                        className="form-control mb-4 registration-input-box"
                        errorMessage="Enter Valid Email Address"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                      />
                      <button className="btn btn-primary w-100">
                        Free Trial
                      </button>
                    </AvForm>
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
