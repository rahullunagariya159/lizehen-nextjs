import React from "react";
import { Row, Col } from "reactstrap";

function SectionTitle(props) {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="title-box text-center">
            <h6 className="title-sub-title mb-0 text-primary f-17">
              {props.title}
            </h6>
            <h3 className="title-heading mt-4">
              {props.description}
              <br /> {props.subDescription}
            </h3>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SectionTitle;
