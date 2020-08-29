import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import { useRouter } from "next/router";

import ScrollspyNav from "./scrollSpy";
import Link from "next/link";

//Import Stickey Header
import StickyHeader from "react-sticky-header";

function Navbar_Page(props) {
  const router = useRouter();
  const [navItems, setNavItems] = useState([
    { id: 1, idnm: "services", navheading: "Services" },
    { id: 2, idnm: "pricing", navheading: "Pricing" },
    { id: 3, idnm: "team", navheading: "Team" },
    { id: 4, idnm: "contact", navheading: "Contact" },
  ]);

  const subMenu = {
    menuItem: [
      {
        id: 1,
        title: "Home One",
        link: "/",
      },
      {
        id: 2,
        title: "Home Two",
        link: "/index-2",
      },
      {
        id: 3,
        title: "Home Three",
        link: "/index-3",
      },
      {
        id: 4,
        title: "Home Four",
        link: "/index-4",
      },
      {
        id: 5,
        title: "Home Five",
        link: "/index-5",
      },
      {
        id: 6,
        title: "Home Six",
        link: "/index-6",
      },
    ],
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);
  const [navDynamicClass, setNavDynamicClass] = useState("");
  const [topPos, setTopPos] = useState("");
  const [isLogoLight, setIsLogoLight] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);

  const toggle = async () => {
    await setIsOpenMenu(!isOpenMenu);
  };

  const dropDownToggle = async () => {
    await setIsDropDownMenu(!isDropDownMenu);
  };

  let targetId = navItems.map((item) => {
    return item.idnm;
  });

  const handleScroll = async () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos >= 50) {
      await setTopPos("nav-sticky");

      await setIsLogoLight(false);
      await setIsNavLight(false);
    } else {
      await setTopPos("");

      if (window.innerWidth <= 768) {
        await setIsLogoLight(false);
      } else {
        await setIsLogoLight(props.logoLight);
      }

      await setIsNavLight(props.navBarLight);
    }
  };

  const redirectPage = async (redirectLink) => {
    await router.push(redirectLink);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setIsLogoLight(props.logoLight);

    if (window.innerWidth <= 768) {
      setIsLogoLight(false);
      setNavDynamicClass();
    } else {
      setIsNavLight(props.navBarLight);
      setNavDynamicClass("navbar-nav ml-auto navbar-center");
    }
  }, []);

  return (
    // <!--Navbar Start-->
    <StickyHeader
      header={
        <Navbar
          className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${
            isNavLight == true ? "navbar-light" : "sticky-dark"
          } ${topPos}`}
        >
          <Container>
            <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
              {isLogoLight == true ? (
                <img src="images/logo-light.png" alt="logo" height={22} />
              ) : (
                <img src="images/logo-dark.png" alt="logo" height={22} />
              )}
            </NavbarBrand>
            <NavbarToggler
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu" />
            </NavbarToggler>

            <Collapse navbar isOpen={isOpenMenu} id="navbarCollapse">
              <Nav className="navbar-nav ml-auto navbar-center" id="mySidenav">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    className="nav-link"
                    href="#home"
                    id="home"
                    role="button"
                  >
                    Home <i className="mdi mdi-chevron-down" />
                  </DropdownToggle>

                  <DropdownMenu>
                    {subMenu.menuItem.map((item, key) => (
                      <DropdownItem
                        tag="a"
                        className="dropdown-item"
                        key={key}
                        onClick={() => redirectPage(item.link)}
                      >
                        {item.title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <ScrollspyNav
                  scrollTargetIds={targetId}
                  scrollDuration="600"
                  headerBackground="false"
                  activeNavClass="active"
                  navAutoClass={navDynamicClass}
                >
                  {navItems.map((item, key) => (
                    <NavItem className="nav-item" key={key}>
                      <NavLink
                        href={"#" + item.idnm}
                        className="nav-link smoothlink"
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </ScrollspyNav>
              </Nav>
              <Nav className="navbar-nav navbar-center">
                <NavItem className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Log In</a>
                  </Link>
                </NavItem>
                <NavItem className="nav-item d-NavItemne-block d-lg-none">
                  <Link href="/">
                    <a className="nav-link">Sign Up</a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="navbar-button d-none d-lg-inline-block">
                <Link href="#">
                  <a
                    className={`btn btn-sm ${
                      isNavLight === true
                        ? "btn-soft-light"
                        : "btn-soft-primary"
                    } btn-round`}
                  >
                    Sign Up
                  </a>
                </Link>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      }
      stickyOffset={-100}
    ></StickyHeader>

    // <!-- Navbar End -->
  );
}

export default Navbar_Page;
