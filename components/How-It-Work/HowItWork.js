import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Container, Row } from "reactstrap";
import HowItWorkBox from "./HowItWorkBox";

function HowItWork(props) {
  const worksProcess = {
    workProcess: [
      {
        workCount: 1,
        workIcon: "pe-7s-light",
        arrowLinkImage: "arrow-1.png",
        title: "Product Review",
        description:
          "Sellesque vel pellentesque eros at commodo dui varius natoque penatibus magnis dis parturient montes ridiculus.",
      },
      {
        workCount: 2,
        workIcon: "pe-7s-pen",
        arrowLinkImage: "arrow-2.png",
        title: "Product Design",
        description:
          "Pellentesque pellentesque eros at commodo dui varius penatibus magnis dis parturient natoque montes ridiculus.",
      },
      {
        workCount: 3,
        workIcon: "pe-7s-monitor",
        arrowLinkImage: "",
        title: "Product Checkup",
        description:
          " commodo ellentesque vel pellentesque eros dui Orci varius natoque penatibus dis partient montes magnis.",
      },
    ],
  };

  return (
    <>
      <section className="section pt-5" id="how-it-work">
        <Container>
          <SectionTitle
            title="How It Work"
            description="Let’s get started in 3 easy"
            subDescription="steps"
          />

          <Row className="mt-5">
            <HowItWorkBox worksProcess={worksProcess} />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowItWork;
