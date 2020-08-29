import React, { useState, useEffect } from "react";
import Link from "next/link";
import ModalSection from "../common/ModalSection";
import { Container, Row, Col } from "reactstrap";

function Video(props) {
  const [isOpen, setIsOpen] = useState(false);

  const callModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setIsOpen(false);
  });

  return (
    <>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h6 className="text-uppercase desc-white f-14">
                  Why you need Lizehen
                </h6>
                <h2 className="line-height_1_4 mt-4">
                  Join millions of users and grow your <br /> business.
                </h2>
                <p className="mt-3 desc-white">Join the free trial now. </p>
                <div className="mt-4 pt-2">
                  <Link href="#video">
                    <a
                      onClick={() => callModal()}
                      className="video-play-icon text-white"
                    >
                      <i className="mdi mdi-play play-icon-circle text-white mr-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Render ModalSection Component for Modal */}

        <ModalSection modalOpen={isOpen} channel="vimeo" videoId="99025203" />
      </section>
    </>
  );
}

export default Video;
