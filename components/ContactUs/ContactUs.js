import React from "react";
import { FormGroup, Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

// Import Section Title
import SectionTitle from "../common/SectionTitle";

function ContactUs(props) {
  const contactDetail = {
    description:
      "Faucibus orci luctus atet ultrices posuere duiorci sollicitudin luctus.",
    address: "2301 Finwood Road Monmouth Junction, NJ 08852",
    email: "RuthJSimpson@armyspy.com",
    contactNo1: "+001 513-965-6401",
    contactNo2: "+225 303-760-9330",
  };
  return (
    <>
      <section className="section" id="contact">
        <Container>
          <SectionTitle
            title="Contact us"
            description="Have a project on mind?"
            subDescription=""
          />

          <Row className="mt-5">
            <Col lg={4}>
              <div className="contact-info bg-light p-4 rounded mt-4">
                <h5 className="f-18">Contact Details</h5>
                <p className="text-muted">
                  Faucibus orci luctus atet ultrices posuere duiorci
                  sollicitudin luctus.
                </p>
                <div className="mt-4">
                  <div className="media">
                    <i className="pe-7s-home h4" />
                    <div className="media-body pl-3">
                      <h5 className="mt-0 f-17">Head Office</h5>
                      <p className="text-muted mb-0">{contactDetail.address}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-1">
                    <div className="media">
                      <i className="pe-7s-mail-open-file h4" />
                      <div className="media-body pl-3">
                        <h5 className="mt-0 f-17">Email Us</h5>
                        <p className="text-muted mb-0">{contactDetail.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-1">
                    <div className="media">
                      <i className="pe-7s-call h4" />
                      <div className="media-body pl-3">
                        <h5 className="mt-0 f-17">Call Support</h5>
                        <p className="text-muted mb-0">
                          {contactDetail.contactNo1}
                        </p>
                        <p className="text-muted mb-0">
                          {contactDetail.contactNo2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="pl-0 pl-lg-2 mt-4">
                <h5 className="f-18">Send a Message</h5>
                <div className="custom-form mt-3">
                  <div id="message" />
                  <AvForm
                    method="post"
                    action="php/contact.php"
                    name="contact-form"
                    id="contact-form"
                  >
                    <Row>
                      <Col lg={6}>
                        <FormGroup className=" mt-3">
                          <label className="contact-lable">First Name</label>
                          <AvField
                            name="fname"
                            id="name"
                            className="form-control"
                            type="text"
                            errorMessage="Enter First Name"
                            validate={{ required: { value: true } }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={6}>
                        <FormGroup className=" mt-3">
                          <label className="contact-lable">Last Name</label>
                          <AvField
                            name="lname"
                            id="lastname"
                            className="form-control"
                            type="text"
                            errorMessage="Enter Last Name"
                            validate={{ required: { value: true } }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="row">
                      <Col lg={12}>
                        <FormGroup className=" mt-3">
                          <label className="contact-lable">Email Address</label>
                          <AvField
                            name="email"
                            id="email"
                            className="form-control"
                            type="text"
                            errorMessage="Enter Valid Email Address"
                            validate={{
                              required: { value: true },
                              email: { value: true },
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <label className="contact-lable">Subject</label>
                          <AvField
                            name="subject"
                            id="subject"
                            className="form-control"
                            type="text"
                            errorMessage="Enter Subject"
                            validate={{ required: { value: true } }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className=" mt-3">
                          <label className="contact-lable">Your Message</label>
                          <AvField
                            type="textarea"
                            name="comments"
                            id="comments"
                            rows={5}
                            className="form-control"
                            errorMessage="Enter your message."
                            validate={{ required: { value: true } }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="mt-3 text-right">
                        <input
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary btn-round"
                          defaultValue="Send Message"
                          type="submit"
                        />
                        <div id="simple-msg" />
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;
