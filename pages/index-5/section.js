import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

function section(props) {
  const items = [
    {
      id: 1,
      title: "We love make things amazing and simple",
      subTitle: "Donec iaculis ligula eros none interdum sem fusce",
      subTitle2: "venenaatis nec biendum Susisse potenti.",
      description:
        "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
      img: "bg-1.jpg",
      getStarted: "Get Started",
      learnMore: "Learn More",
      link: "/index-5",
    },
    {
      id: 2,
      title: "We love make things amazing and simple",
      subTitle: " Donec iaculis ligula eros none interdum sem fusce",
      subTitle2: "venenaatis nec biendum Susisse potenti.",
      description:
        "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
      img: "bg-2.jpg",
      getStarted: "Get Started",
      learnMore: "",
      link: "/index-5",
    },
    {
      id: 3,
      title: "We love make things amazing and simple",
      subTitle: "Donec iaculis ligula eros none interdum sem fusce",
      subTitle2: "venenaatis nec biendum Susisse potenti.",
      description:
        "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
      img: "bg-3.jpg",
      getStarted: "",
      learnMore: "Learn More",
      link: "/index-5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const Slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="bg-overlay" />

        <div
          className="home-center"
          style={{ backgroundImage: `url(images/${item.img})` }}
        >
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={10}>
                  <div className="home-content text-center text-white">
                    <h1 className="home-title">{item.title}</h1>
                    <p className="text-white-50 mt-3 f-20">
                      {" "}
                      {item.subTitle}
                      <br /> {item.subTitle2}
                    </p>
                    <div className="mt-5">
                      <div className="mt-4">
                        {item.getStarted !== "" ? (
                          <Link href={item.link}>
                            <a className="btn btn-primary mt-2 mr-2">
                              Get Started{" "}
                              <i className="mdi mdi-arrow-right ml-1" />
                            </a>
                          </Link>
                        ) : (
                          ""
                        )}

                        {item.learnMore !== "" ? (
                          <Link href={item.link}>
                            <a className="btn btn-success mt-2 mr-2">
                              Learn More{" "}
                              <i className="mdi mdi-arrow-right ml-1" />
                            </a>
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <section className="home-slider" id="home">
        <div className="container-fluid">
          <div className="row">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              {Slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default section;
