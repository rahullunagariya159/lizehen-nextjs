import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";

function HeaderTagline(props) {
  return (
    // <!-- TAGLINE HEADER START-->
    <div className="topbar">
      <Container>
        <div className="float-left">
          <div className="phone-topbar">
            <ul className="list-inline topbar-link mb-0">
              <li className="list-inline-item mr-4 pr-2">
                <Link href="#">
                  <a>
                    <i className="mdi mdi-email mr-2 f-16" />
                    Support@example.com
                  </a>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link href="#">
                  <a>
                    <i className="mdi mdi-earth mr-2 f-16" />
                    735 Russell Street Lowell, MA 01852
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-right">
          <ul className="list-inline topbar-social pb-0 pt-2 mt-1 mb-0">
            <li className="list-inline-item pl-2">
              <Link href="#">
                <a>
                  <i className="mdi mdi-facebook" />
                </a>
              </Link>
            </li>
            <li className="list-inline-item pl-2">
              <Link href="#">
                <a>
                  <i className="mdi mdi-twitter" />
                </a>
              </Link>
            </li>
            <li className="list-inline-item pl-2">
              <Link href="#">
                <a>
                  <i className="mdi mdi-instagram" />
                </a>
              </Link>
            </li>
            <li className="list-inline-item pl-2">
              <Link href="#">
                <a>
                  <i className="mdi mdi-google-plus" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </Container>
    </div>
  );
}

export default HeaderTagline;
