import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../styles/about.css";
import aboutImg from "../assets/images/gallery-06.jpg";

const About = () => {
  return (
    <>
      <section className="about_section-01">
        <Container>
          <Row>
            <Col lg="6" className="m-auto about__content">

              <img className="w-100 overflow-hidden rounded-5" src={aboutImg} alt="" />

              <h1 className="my-5 text-center"> About </h1>

              <p>
                Welcome to my website! My name is “KIBRIA” and I am a passionate
                traveler who loves exploring new cultures, meeting new people,
                and sharing my love for my home country with others.
              </p>

              <p>
                As a professional travel guide, I have years of experience
                taking foreign tourists on exciting adventures throughout
                “Bangladesh”. From the bustling cities to the tranquil
                countryside, I know the best spots to visit, the local customs
                to observe, and the hidden gems that only the locals know about.
              </p>

              <p>
                My tours are designed to be immersive and educational, providing
                a deep understanding of the history, culture, and traditions of
                “Bangladesh”. I am fluent in “English, Able to Understand Hindi
                & Bangla” and have a wealth of knowledge about the local food,
                art, and music scenes.
              </p>

              <p>
                I believe in responsible tourism and strive to make a positive
                impact on the communities we visit. I work with local businesses
                and support sustainable tourism initiatives that benefit the
                environment and the local people.
              </p>

              <p>
                Whether you are a solo traveler or a group of friends, I can
                tailor a tour to meet your interests and needs. Whether you want
                to explore the historic landmarks, hike through the stunning
                landscapes, or experience the local cuisine, I have the perfect
                itinerary for you.
              </p>

              <p>
                Join me on an unforgettable journey through “Bangladesh” and let
                me show you the beauty and wonder of this amazing destination!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
