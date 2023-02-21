import React from "react";

import { Col, Container, Row } from "reactstrap";
import "./newsletter.css";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="Newsletter__component newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2> Subscribe now to get useful traveling information. </h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Type Your Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minima recusandae assumenda tempora neque possimus!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
