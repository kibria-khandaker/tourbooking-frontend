import React from "react";
import "../styles/home.css";
import { Col, Container, Row } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import SearchBar from "./../shared/SearchBar";
import ServiceList from "./../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "./../components/Image-gallery/MasonryImagesGallery";
import Testimonials from './../components/Testimonial/Testimonials';

const Home = () => {
  return (
    <>
      {/* --------------- hero section start ---------------   */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before you go"} />
                  <img src={worldImg} alt="world-Img" />
                </div>
                <h1>
                  Traveling opens the door to create
                  <span className="highlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis odit error numquam sit nisi consequuntur delectus id
                  laudantium voluptatibus non.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* --------------- hero section end ---------------   */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle"> What we serve</h5>
              <h2 className="services__title"> We Offer our best Services </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* --------------- featured tour section start  --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className=" featured__tour-title "> Our featured tours </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* --------------- featured tour section end  --------------- */}

      {/* --------------- Experience section start  --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With OUr All Experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Quisquam rerum alias quas quo quidem error?
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-lg-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* --------------- Experience section end  --------------- */}

      {/* --------------- Gallery section Start  --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit Our customers tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* --------------- Gallery section End  --------------- */}

      {/* --------------- Testimonial section Start  --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials></Testimonials>
            </Col>
          </Row>
        </Container>
      </section>
      {/* --------------- Testimonial section End  --------------- */}
    </>
  );
};

export default Home;
