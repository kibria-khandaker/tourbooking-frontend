import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            
            {/* ---------------- Logo start ---------------- */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/* ---------------- Logo end ---------------- */}

            {/* ---------------- Menu start ---------------- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass=>navClass.isActive?"active__link":""}> {item.display} </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ---------------- Menu end ---------------- */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className=" nav__btns d-flex align-content-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className=" mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;