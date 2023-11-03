import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";

import BorderButton, { Button2 } from "../../component/buttons/Buttons";
import { ArrowRight, ShapeguruLogo } from "../../assets/icons/icons";
import {
  bg1,
  bg2,
  expert1,
  expert2,
  bgImage,
  expert3,
  expert4,
  bannerBG,
  testimonialBG,
} from "../../assets/images/images";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import JoinModal from "../../component/JoinModal/JoinModal";

const Home = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="home">
        <div
          className="home__banner"
          style={{ backgroundImage: `url(${bannerBG})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md={12} lg={8}>
                <div className="home__banner__text text-center">
                  <h1>ShapeGuru: Where Fitness Dreams Come True.</h1>
                  <p>
                    Your fitness dreams become a reality here! With ShapeGuru by
                    your side, you can achieve anything you set your mind to.
                    Your GOAL + Our EXPERTISE = Fitness Conquered!
                  </p>

                  <Button2
                    title="Join Now"
                    icon={<ArrowRight />}
                    onClick={() => handleShow()}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="expertCoaches">
        <Container>
          <div className="heading mb-5">
            <h2 className="heading__head">What Will You Get</h2>
          </div>
          <Row className=" g-0">
            <Col md={6} className="ex__text">
              <div className="expertCoaches__text pe-5">
                <div className="expertCoaches__text__center">
                  <h3>Personal Trainer</h3>
                  <p>
                    Meet Your Personal Fitness Guru: With a minimum of 10+ years
                    of industry expertise. Your dedicated trainer will craft a
                    custom plan aligned with your goals and adjust it to fit
                    your routine, guaranteeing progress. Fitness and nutrition
                    at your fingertips, convenient and results driven. Have
                    questions? Connect with your ShapeGuru – we are always just
                    a message away!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="ex__img">
              <div className="expertCoaches__images rightImg">
                <img
                  src={expert1}
                  alt="expert-1"
                  className="img-fluid frontImg"
                />
                <img src={bg2} alt="expert-1" className="img-fluid backImg" />
              </div>
            </Col>
          </Row>
          <Row className=" g-0">
            <Col md={6} className="ex__img">
              <div className="expertCoaches__images leftImg">
                <img
                  src={expert2}
                  alt="expert-1"
                  className="img-fluid frontImg"
                />
                <img src={bg1} alt="expert-2" className="img-fluid backImg" />
              </div>
            </Col>
            <Col md={6} className="ex__text">
              <div className="expertCoaches__text ps-5 ">
                <div className="expertCoaches__text__center">
                  <h3>Your Unique Diet</h3>
                  <p>
                    Customised and flexible diets for your goals at ShapeGuru,
                    we make achieving your goals easy with diets that are
                    tailored just for you. Our plans are simple to follow and
                    adaptable to your needs, ensuring your success. Whether you
                    want to lose weight, gain muscle, or simply stay healthy,
                    we've got you covered. Say goodbye to the one-size-fits-all
                    diets and hello to a personalised, flexible approach to
                    nutrition!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col md={6} className="ex__text">
              <div className="expertCoaches__text pe-5">
                <div className="expertCoaches__text__center">
                  <h3>Workout anytime anywhere</h3>
                  <p>
                    We have solutions for all scenarios. If the gym isn't your
                    preference, no worries. Our expert trainers conduct
                    interactive online classes, bringing the gym experience to
                    your home. Achieve your fitness goals conveniently from
                    home. Our trainers create 10-15 minutes workout plans for
                    those with busy schedules, keeping you on track. We're
                    dedicated to making fitness accessible and convenient. At
                    ShapeGuru, ensuring everyone can pursue their goals with
                    ease.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="ex__img">
              <div className="expertCoaches__images rightImg">
                <img
                  src={expert3}
                  alt="expert-1"
                  className="img-fluid frontImg"
                />
                <img src={bg2} alt="expert-1" className="img-fluid backImg" />
              </div>
            </Col>
          </Row>
          <Row className=" g-0">
            <Col md={6} className="ex__img">
              <div className="expertCoaches__images leftImg">
                <img
                  src={expert4}
                  alt="expert-1"
                  className="img-fluid frontImg"
                />
                <img src={bg1} alt="expert-1" className="img-fluid backImg" />
              </div>
            </Col>
            <Col md={6} className="ex__text">
              <div className="expertCoaches__text ps-5 ">
                <div className="expertCoaches__text__center">
                  <h3>Weekly Follow Ups</h3>
                  <p>
                    ShapeGuru trainers conduct weekly check-ins to track
                    progress, address concerns, celebrate victories and adjust
                    fitness and nutrition plans as goals evolve. We are your
                    supportive accountability partners, offering expert guidance
                    and motivation. Our expert weekly check-ins gauge success
                    beyond weight, focusing on overall well-being and energy
                    levels, inspiring clients to overcome plateaus and excel.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="videoTestimonial"
        style={{ backgroundImage: `url(${testimonialBG})` }}
      >
        <Container>
          <div className="heading mb-5">
            <h2 className="heading__head">Testimonials</h2>
          </div>
          <Row className="g-2">
            <Col md="12" lg={6}>
              <Slider className="testimonial" {...settings}>
                <div className="testimonial__item">
                  <div className="testimonial__content">
                    <p>
                      I am introverted and so I was always intimidated going to
                      the gym and group sessions. Now, I've gained a lot of
                      flexibility and am able to do difficult poses. I feel like
                      my body is accepting all the new things I'm doing. All the
                      credit goes to the teachers because they take you through
                      a journey! I am introverted and so I was always
                      intimidated going to the gym and group sessions. Now, I've
                      gained a lot of flexibility and am able to do difficult
                      poses. I feel like my body is accepting all the new things
                      I'm doing. All the credit goes to the teachers because
                      they take you through a journey!
                    </p>

                    <div className="posted">
                      <span className="posted__img">
                        <img
                          src={expert2}
                          alt="expert-1"
                          className="img-fluid"
                        />
                      </span>
                      <div className="posted__by">
                        <h5>Lorem Ipsum</h5>
                        <p>MyYogaTeacher Member</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial__item">
                  <div className="testimonial__content">
                    <p>
                      I am introverted and so I was always intimidated going to
                      the gym and group sessions. Now, I've gained a lot of
                      flexibility and am able to do difficult poses. I feel like
                      my body is accepting all the new things I'm doing. All the
                      credit goes to the teachers because they take you through
                      a journey! I am introverted and so I was always
                      intimidated going to the gym and group sessions. Now, I've
                      gained a lot of flexibility and am able to do difficult
                      poses. I feel like my body is accepting all the new things
                      I'm doing. All the credit goes to the teachers because
                      they take you through a journey!
                    </p>

                    <div className="posted">
                      <span className="posted__img">
                        <img
                          src={expert2}
                          alt="expert-1"
                          className="img-fluid"
                        />
                      </span>
                      <div className="posted__by">
                        <h5>Lorem Ipsum</h5>
                        <p>MyYogaTeacher Member</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial__item">
                  <div className="testimonial__content">
                    <p>
                      I am introverted and so I was always intimidated going to
                      the gym and group sessions. Now, I've gained a lot of
                      flexibility and am able to do difficult poses. I feel like
                      my body is accepting all the new things I'm doing. All the
                      credit goes to the teachers because they take you through
                      a journey! I am introverted and so I was always
                      intimidated going to the gym and group sessions. Now, I've
                      gained a lot of flexibility and am able to do difficult
                      poses. I feel like my body is accepting all the new things
                      I'm doing. All the credit goes to the teachers because
                      they take you through a journey!
                    </p>

                    <div className="posted">
                      <span className="posted__img">
                        {" "}
                        <img
                          src={expert2}
                          alt="expert-1"
                          className="img-fluid"
                        />
                      </span>
                      <div className="posted__by">
                        <h5>Lorem Ipsum</h5>
                        <p>MyYogaTeacher Member</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial__item">
                  <div className="testimonial__content">
                    <p>
                      I am introverted and so I was always intimidated going to
                      the gym and group sessions. Now, I've gained a lot of
                      flexibility and am able to do difficult poses. I feel like
                      my body is accepting all the new things I'm doing. All the
                      credit goes to the teachers because they take you through
                      a journey! I am introverted and so I was always
                      intimidated going to the gym and group sessions. Now, I've
                      gained a lot of flexibility and am able to do difficult
                      poses. I feel like my body is accepting all the new things
                      I'm doing. All the credit goes to the teachers because
                      they take you through a journey!
                    </p>

                    <div className="posted">
                      <span className="posted__img">
                        {" "}
                        <img
                          src={expert2}
                          alt="expert-1"
                          className="img-fluid"
                        />
                      </span>
                      <div className="posted__by">
                        <h5>Lorem Ipsum</h5>
                        <p>MyYogaTeacher Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
            <Col md="12" lg={6}>
              <div className="youTubeVideoWrap">
                <div className="youTubeVideo">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/D0UnqGm_miA?si=v1m3odwUUIzCpKg3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
          <div className="btn-videosectn">
            <Button2
              title="Join Now"
              onClick={() => handleShow()}
              icon={<ArrowRight />}
            />
          </div>
        </Container>
      </div>

      <JoinModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        size={"lg"}
      />
    </>
  );
};

export default Home;
