import React from "react";
import { Container, Row, Col } from "reactstrap";

function Client(props) {
  const clients = {
    client: [
      {
        name: "1",
        image: "1.png",
      },
      {
        name: "2",
        image: "2.png",
      },
      {
        name: "3",
        image: "3.png",
      },
      {
        name: "4",
        image: "4.png",
      },
    ],
  };

  return (
    <>
      <section className={`section ${props.classPt}`}>
        <Container>
          <Row className="mt-5">
            {clients.client.map((client, key) => (
              <Col lg={3} key={key}>
                <div className="client-images mt-4">
                  <img
                    src={`images/clients/${client.image}`}
                    alt={client.name}
                    className="mx-auto img-fluid d-block"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Client;
