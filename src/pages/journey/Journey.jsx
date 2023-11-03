import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Journey.scss";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { expert1 } from "../../assets/images/images";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <>
      <InnerBanner heading="Journey" joinbtn={true} />
      <div className="journeyPage py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md="12">
              <div className="journeyPage__card">
                <figure><img src={expert1} alt="img"/></figure>
                <div className="journeyPage__card__text">
                  <h3><Link to='/'> How Rob Finally Became a Workout Person</Link></h3>
                  <p>
                    Rob knew having a healthier body and mind was the key to
                    living a better life. But playing video games was easier
                    (and more appealing). He needed support from a coach.{" "}
                  </p>
                </div>
              </div>
            </Col>

            

           
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Journey;
