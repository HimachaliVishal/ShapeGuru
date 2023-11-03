import React from "react";

import "./Footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Contact,
  Email,
  Facebook,
  Linkedin,
  Location,
  ShapeguruLogo,
  Youtube,
} from "../../assets/icons/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col md="4">
              <div className="footer__top__item ps-0">
                <Location />
                <div className="footer__top__caption">
                  <h4>Address</h4>
                  <p>2912 Meadobrook Road , Los Angeles, CA 90017</p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="footer__top__item">
                <Email />
                <div className="footer__top__caption">
                  <h4>Email</h4>
                  <p>lorem@ipsum.com</p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="footer__top__item">
                <Contact />
                <div className="footer__top__caption">
                  <h4>Contact Us</h4>
                  <p>310-385-4857</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col md="5">
              <div className="footer__item footer__item__logo pe-5">
                <h3>About</h3>
                <div className="itmLogo">
                  <p>
                    At ShapeGuru, we are not just a fitness and wellness
                    company; we are the symbol of a powerful transformation. Our
                    story began with a simple yet great journey of
                    self-discovery and empowerment, driven by the passion of
                    fitness. It all started with our founder, who, like many of
                    us, faced the challenges of being criticised and bullied for
                    being too skinny.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="2">
              <div className="footer__item">
                <h3>UseFul Links</h3>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="2">
              <div className="footer__item">
                <h3>Help</h3>
                <ul>
                  <li>
                    <Link to="/policies">Privacy Policy</Link>
                  </li>

                  <li>
                    <Link to="/refund">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="footer__item">
                <h3>Get in Touch</h3>
                <ul className="footer__item__social">
                  <li>
                    <Link to="/" className="facebook">
                      <span>
                        <Facebook />
                      </span>
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="youtube">
                      <span>
                        <Youtube />
                      </span>{" "}
                      Youtube
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="linkedin">
                      <span>
                        {" "}
                        <Linkedin />
                      </span>
                      Linked In
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p className="copyright">© 2023 ShapeGuru.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
