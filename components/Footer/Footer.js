import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

// Import Footer Links
import FooterLinks from "./FooterLinks";

function Footer(props) {
  const footerLink = {
    footerItems: [
      {
        title: "Product",
        links: [
          { linkTitle: "Services", link: "#" },
          { linkTitle: "Features", link: "#" },
          { linkTitle: "Credit", link: "#" },
          { linkTitle: "Team", link: "#" },
          { linkTitle: "Portfolio", link: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { linkTitle: "Missions", link: "#" },
          { linkTitle: "Carrers", link: "#" },
          { linkTitle: "Investors", link: "#" },
          { linkTitle: "Press", link: "#" },
          { linkTitle: "Blog", link: "#" },
        ],
      },
      {
        title: "More Info",
        links: [
          { linkTitle: "Pricing", link: "#" },
          { linkTitle: "For Marketing", link: "#" },
          { linkTitle: "For CEOs", link: "#" },
          { linkTitle: "For Agencies", link: "#" },
          { linkTitle: "Our Apps", link: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { linkTitle: "Form validation", link: "#" },
          { linkTitle: "Visibility", link: "#" },
          { linkTitle: "Accessibility", link: "#" },
          { linkTitle: "Design Defined", link: "#" },
          { linkTitle: "Marketplace", link: "#" },
        ],
      },
    ],
    socialIcons: [
      { icon: "remixicon-facebook-line", iconLink: "#" },
      { icon: "remixicon-twitter-line", iconLink: "#" },
      { icon: "remixicon-instagram-line", iconLink: "#" },
      { icon: "remixicon-skype-line", iconLink: "#" },
    ],
  };

  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-info mt-4">
                <img src="images/logo-dark.png" alt="img" height={22} />
                <p className="text-muted mt-4 mb-2">
                  Pretium viverra tinunt sagittis tempor.
                </p>
                <img
                  src="images/features/img-1.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="row pl-0 pl-lg-3">
                {footerLink.footerItems.map((item, key) => (
                  <Col lg={3} key={key}>
                    <div className="mt-4">
                      <h5 className="text-uppercase f-16">{item.title}</h5>
                      <ul className="list-unstyled footer-link mt-3">
                        {item.links.map((flink, key) => (
                          <li key={key}>
                            <Link href={flink.link}>
                              <a>{flink.linkTitle}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </div>
            </Col>
          </Row>
          <hr className="my-5" />

          <FooterLinks />
        </Container>
      </section>
    </>
  );
}

export default Footer;
