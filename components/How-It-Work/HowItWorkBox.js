import React from "react";
import { Col } from "reactstrap";
function HowItWorkBox(props) {
  const workProcessArrLength = props.worksProcess.workProcess.length;

  return (
    <>
      {props.worksProcess.workProcess.map((work, key) => (
        <Col lg={4} key={key}>
          <div className="work-box text-center p-3">
            {work.workCount < workProcessArrLength ? (
              <div className="arrow">
                <img src={`images/${work.arrowLinkImage}`} alt={work.title} />
              </div>
            ) : null}

            <div className="work-count">
              <p className="mb-0">{work.workCount}</p>
            </div>
            <div className="work-icon">
              <i className={work.workIcon} />
            </div>
            <h5 className="mt-4">{work.title}</h5>
            <p className="text-muted mt-3">{work.description}</p>
          </div>
        </Col>
      ))}
    </>
  );
}

export default HowItWorkBox;
