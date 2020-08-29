import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/SectionTitle";

function Team(props) {
  const team = {
    teams: [
      {
        id: 1,
        img: "img-1.jpg",
        name: "Lora Scott",
        designation: "CEO",
        link: "#",
      },
      {
        id: 2,
        img: "img-2.jpg",
        name: "Andrew Schimke",
        designation: "Developer",
        link: "#",
      },
      {
        id: 3,
        img: "img-3.jpg",
        name: "Mary Rivers",
        designation: "Manager",
        link: "#",
      },
      {
        id: 4,
        img: "img-4.jpg",
        name: "John Wright",
        designation: "Designer",
        link: "#",
      },
    ],
  };
  return (
    <>
      <section className="section" id="team">
        <Container>
          <SectionTitle
            title="Team"
            description="Meet our expert people of"
            subDescription="payonline"
          />

          <Row className="mt-5 pt-2">
            {team.teams.map((team, key) => (
              <Col lg={3} key={key}>
                <div className="team-box text-center py-3 rounded mt-4">
                  <div className="team-img">
                    <img
                      src={`images/users/${team.img}`}
                      className="img-fluid rounded-circle"
                      alt={team.name}
                    />
                  </div>
                  <div className="team-social-icon">
                    <i className="mdi mdi-email" />
                  </div>
                  <h5 className="f-18 mt-4 mb-2">{team.name}</h5>
                  <p className="text-muted">{team.designation}</p>
                  <hr />
                  <div className="team-social mt-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <Link href={team.link}>
                          <a className="text-reset">
                            <i className="mdi mdi-facebook" />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href={team.link}>
                          <a className="text-reset">
                            <i className="mdi mdi-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href={team.link}>
                          <a className="text-reset">
                            <i className="mdi mdi-google" />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href={team.link}>
                          <a className="text-reset">
                            <i className="mdi mdi-pinterest" />
                          </a>
                        </Link>
                      </li>
                    </ul>
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

export default Team;
