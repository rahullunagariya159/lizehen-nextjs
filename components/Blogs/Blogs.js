import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/SectionTitle";

function Blogs(props) {
  const blogs = {
    blog: [
      {
        title: "UI & UX Design",
        subTitle: "Doing a cross country road trip",
        img: "img-1.jpg",
        description:
          "Curabitur lacus maximus suscipit curtur eget lectus lacinia consectetur dolor id volutpat magna fermentum bibendum.",
        link: "#",
        share: "12",
        views: "15",
      },
      {
        title: "Digital Marketing",
        subTitle: "New exhibition at our Museum",
        img: "img-2.jpg",
        description:
          "The wise man therefore always holds in these matters to this principle of selection rejects pleasures secure other pains.",
        link: "#",
        share: "12",
        views: "15",
      },
      {
        title: "Travelling",
        subTitle: "Why are so many people..",
        img: "img-3.jpg",
        description:
          "Juis autem vel eumat reprehenderit voluptate velit esse quam nihil molestiae consequatur fugiat voluptas nulla pariatur.",
        link: "#",
        share: "12",
        views: "15",
      },
    ],
  };
  return (
    <>
      <section className="section bg-light" id="blog">
        <Container>
          <SectionTitle
            title="Blogs"
            description="Our latest blog posts"
            subDescription="insights articles"
          />

          <Row className="mt-5">
            {blogs.blog.map((blog, key) => (
              <Col lg={4} key={key}>
                <div className="blog-box mt-4">
                  <div className="blog-img">
                    <img
                      src={`images/blog/${blog.img}`}
                      className="img-fluid"
                      alt={blog.title}
                    />
                  </div>
                  <div className="blog-content mt-3">
                    <div className="blog-lable">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <i className="mdi mdi-share-variant mr-1" />
                          {blog.share}
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-account mr-1" />
                          {blog.views}
                        </li>
                      </ul>
                    </div>
                    <h6 className="f-13 text-muted">{blog.title}</h6>
                    <h5 className="mt-2">
                      <Link href={blog.link}>
                        <a className="blog-title">{blog.subTitle}</a>
                      </Link>
                    </h5>
                    <p className="text-muted mt-3">{blog.description}</p>
                    <div className="mt-4">
                      <Link href={blog.link}>
                        <a className="btn btn-sm btn-primary btn-round">
                          Read More <i className="mdi mdi-arrow-right" />
                        </a>
                      </Link>
                    </div>
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

export default Blogs;
