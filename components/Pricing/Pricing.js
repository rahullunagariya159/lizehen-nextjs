import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function Pricing(props) {
  const pricingPlan1 = {
    pricings: [
      {
        id: 1,
        title: "Starter",
        price: "34",
        duration: "Mo",
        currency: "$",
        description:
          "Aliquam porttitor sagittis dignissim nibh amet rhoncus risus.",
        tag: "",
        features: {
          website: "2",
          storage: "30 GB",
          yearTrial: "Email",
          bandwith: "Unmetered",
          annualPlan: "Free domain",
        },
      },
    ],
  };

  const pricingPlan2 = {
    pricings: [
      {
        id: 1,
        title: "Personal",
        price: "94",
        currency: "$",
        duration: "Mo",
        description:
          "Aliquam porttitor sagittis dignissim nibh amet rhoncus risus.",
        tag: "Popular",
        features: {
          website: "2",
          storage: "30 GB",
          yearTrial: "Email",
          bandwith: "Unmetered",
          annualPlan: "Free domain",
        },
      },
    ],
  };

  const pricingPlan3 = {
    pricings: [
      {
        id: 1,
        title: "Ultimate",
        price: "64",
        currency: "$",
        duration: "Mo",
        description:
          "Aliquam porttitor sagittis dignissim nibh amet rhoncus risus.",
        tag: "",
        features: {
          website: "2",
          storage: "30 GB",
          yearTrial: "Email",
          bandwith: "Unmetered",
          annualPlan: "Free domain",
        },
      },
    ],
  };

  return (
    <>
      <section className="section" id="pricing">
        <Container className="container">
          <SectionTitle
            title="Pricing"
            description="Best Pricing Package Start"
            subDescription="Business"
          />

          <Row className="mt-5 pt-4">
            {pricingPlan1.pricings.map((pricingPlan1, key) => (
              <Col lg={4} key={key}>
                <div className="pricing-box mt-4 rounded">
                  <div className="pricing-content">
                    <h4 className="text-uppercase">{pricingPlan1.title}</h4>
                    <p className="text-muted mb-4 pb-1">
                      {pricingPlan1.description}
                    </p>
                    <hr />
                    <div className="pricing-plan mt-4 text-primary text-center">
                      <h1>
                        <sup className="text-muted">
                          {pricingPlan1.currency}{" "}
                        </sup>
                        {pricingPlan1.price}{" "}
                        <small className="f-16 text-muted">
                          / {pricingPlan1.duration}
                        </small>
                      </h1>
                    </div>
                    <hr />
                    <div className="pricing-features pt-3">
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan1.features.website}
                        </strong>{" "}
                        Website
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan1.features.storage}
                        </strong>{" "}
                        Storage
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan1.features.bandwith}
                        </strong>{" "}
                        Bandwidth
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan1.features.yearTrial}
                        </strong>{" "}
                        1 Year trail
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan1.features.annualPlan}
                        </strong>{" "}
                        annual plan
                      </p>
                    </div>
                    <div className="pricing-border mt-3" />
                    <div className="mt-4 pt-2 text-center">
                      <Link href="#">
                        <a className="btn btn-primary btn-round">
                          Purchase Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            {pricingPlan2.pricings.map((pricingPlan2, key) => (
              <Col lg={4} key={key}>
                <div className="pricing-box border border-primary mt-4 rounded">
                  <div className="pricing-content">
                    <div className="pricing-lable">{pricingPlan2.tag}</div>
                    <h4 className="text-uppercase">{pricingPlan2.title}</h4>
                    <p className="text-muted mb-4 pb-1">
                      {pricingPlan2.description}
                    </p>
                    <hr />
                    <div className="pricing-plan mt-4 text-primary text-center">
                      <h1>
                        <sup className="text-muted">
                          {pricingPlan2.currency}{" "}
                        </sup>
                        {pricingPlan2.price}{" "}
                        <small className="f-16 text-muted">
                          / {pricingPlan2.duration}
                        </small>
                      </h1>
                    </div>
                    <hr />
                    <div className="pricing-features pt-3">
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan2.features.website}
                        </strong>{" "}
                        Website
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan2.features.storage}
                        </strong>{" "}
                        Storage
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan2.features.bandwith}
                        </strong>{" "}
                        Bandwidth
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan2.features.yearTrial}
                        </strong>{" "}
                        1 Year trail
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan2.features.annualPlan}
                        </strong>{" "}
                        annual plan
                      </p>
                    </div>
                    <div className="pricing-border mt-3" />
                    <div className="mt-4 pt-2 text-center">
                      <Link href="#">
                        <a className="btn btn-primary btn-round">
                          Purchase Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            {pricingPlan3.pricings.map((pricingPlan3, key) => (
              <Col lg={4} key={key}>
                <div className="pricing-box mt-4 rounded">
                  <div className="pricing-content">
                    <h4 className="text-uppercase">{pricingPlan3.title}</h4>
                    <p className="text-muted mb-4 pb-1">
                      {pricingPlan3.description}
                    </p>
                    <hr />
                    <div className="pricing-plan mt-4 text-primary text-center">
                      <h1>
                        <sup className="text-muted">
                          {pricingPlan3.currency}{" "}
                        </sup>
                        {pricingPlan3.price}{" "}
                        <small className="f-16 text-muted">
                          / {pricingPlan3.duration}
                        </small>
                      </h1>
                    </div>
                    <hr />
                    <div className="pricing-features pt-3">
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan3.features.website}
                        </strong>{" "}
                        Website
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan3.features.storage}
                        </strong>{" "}
                        Storage
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {" "}
                          {pricingPlan3.features.bandwith}
                        </strong>{" "}
                        Bandwidth
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan3.features.yearTrial}
                        </strong>{" "}
                        1 Year trail
                      </p>
                      <p className="text-muted">
                        <strong className="text-dark">
                          {pricingPlan3.features.annualPlan}
                        </strong>{" "}
                        annual plan
                      </p>
                    </div>
                    <div className="pricing-border mt-3" />
                    <div className="mt-4 pt-2 text-center">
                      <Link href="#">
                        <a className="btn btn-primary btn-round">
                          Purchase Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pricing;
