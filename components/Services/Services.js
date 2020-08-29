import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { Animated } from "react-animated-css";

function Services() {
  const [activeService, setActiveService] = useState("Wordpress Development");

  const services = {
    service: [
      {
        id: 1,
        img: "wordpressDev",
        title: "Wordpress Development",
        icon: "mdi mdi-wordpress",
        description:
          " Nulla et urna mauris Phasellus varius odio ut quam pharetra tristique Quisque lobortis velit felis nec aliquet est ursus velit ac tincidunt urna.",
      },
      {
        id: 2,
        img: "backupSol",
        title: "Backup solution",
        icon: "mdi mdi-security",
        description:
          " Vestibulum euismod tincidunt ligula at pharetra velit. Mauris nisi diam ornare dignissim metus ac vehicula imperdiet tortor Mauris a consequat mi.",
      },
      {
        id: 3,
        img: "CloudHost",
        title: "Cloud Hosting",
        icon: "mdi mdi-cloud-download-outline",
        description:
          " Laoreet est eleifend Phasellus nec mi eget libero ornare venenatis sit amet id turpis Interdum et malesuada fames ac ante primis in faucibus.",
      },
    ],
    serviceImages: [
      {
        id: 1,
        title: "Wordpress Development",
        image: "img-4.png",
      },
      {
        id: 2,
        title: "Backup solution",
        image: "img-5.png",
      },
      {
        id: 3,
        title: "Cloud Hosting",
        image: "img-6.png",
      },
    ],
  };

  return (
    <>
      <section className="section bg-light" id="services">
        <Container>
          <SectionTitle
            title="Services"
            description="Best Web Services For Effective"
            subDescription="Business"
          />

          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="tab-content mt-4">
                {services.serviceImages.map((serviceImg, key) => (
                  <div
                    className={`tab-pane   ${
                      serviceImg.title === activeService ? " show active" : ""
                    }`}
                    id="v-pills-gen-ques"
                    role="tabpanel"
                    aria-labelledby="v-pills-gen-ques-tab"
                    key={key}
                  >
                    <div className="services-img">
                      <Animated
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        animationInDuration={1000}
                        animationOutDuration={1000}
                        isVisible={true}
                      >
                        <img
                          src={`images/features/${serviceImg.image}`}
                          className="img-fluid"
                          alt={serviceImg.title}
                        />
                      </Animated>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={6}>
              <div
                className="nav flex-column nav-pills mt-4"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {services.service.map((service, key) => (
                  <Link href="#img" key={key}>
                    <a
                      className={`nav-link ${
                        activeService === service.title ? "active" : ""
                      }`}
                      id="v-pills-gen-ques-tab"
                      data-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-gen-ques"
                      aria-selected="true"
                      onClick={async () =>
                        await setActiveService(service.title)
                      }
                    >
                      <div className="p-3">
                        <div className="media">
                          <div className="services-title">
                            <i className={service.icon} />
                          </div>
                          <div className="media-body pl-4">
                            <h5 className="mb-2 services-title mt-2">
                              {service.title}
                            </h5>
                            <p className="mb-0"> {service.description}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
