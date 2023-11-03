import React from "react";
import "./Contact.scss";

import { Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import  Input, { Textarea } from "../../component/Input/Input";
import { Button2 } from "../../component/buttons/Buttons";
import { ArrowRight } from "../../assets/icons/icons";
import { contact } from "../../assets/images/images";
import InnerBanner from "../../component/innerBanner/InnerBanner";

const Contact = () => {
 

  

  return (
    <>
    <InnerBanner heading="Contact Us" />
      <div className="contact py-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="mapBlock">
                <img src={contact} alt="contact" className="img-fluid"/>
              </div>
            </Col>
            <Col md={6}>
              <div className="ps-4">
                <div className="contact__heading">
                  <h3>Get in touch</h3>
                </div>

                <form onSubmit={""}>
                  <Row>
                    <Col md="12">
                      <Input
                        type="text"
                        label="Name"
                        placeholder="Enter Name"
                        star={"*"}
                      />
                    </Col>

                    <Col md="6">
                      <Input
                        type="email"
                        label="Email"
                        placeholder="Enter Email"
                        star={"*"}
                      />
                    </Col>

                    <Col md="6">
                      <Input
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter Phone"
                        star={"*"}
                      />
                    </Col>
                    <Col md="12">
                      <Input
                        type="text"
                        label="Subject"
                        placeholder="Enter Subject"
                        
                      />
                    </Col>

                    <Col md="12">
                      <Textarea
                        type="text"
                        label="Message"
                        placeholder="Enter Message"
                      rows={6}
                      />
                    </Col>
                    <Col md="12">
                      <div className="mt-4"></div>
                    <Button2
                    title="Join Now"
                    icon={<ArrowRight />}
                  />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
