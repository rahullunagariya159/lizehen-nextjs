import React from "react";
import { Row, Col } from "reactstrap";

function FooterLinks(props) {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="text-center">
            <p className="text-muted mb-0">
              2020 © Lizehen. Design by Themesdesign
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default FooterLinks;
