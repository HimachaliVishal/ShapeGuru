import React from "react";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import Input from "../../component/Input/Input";
import { Button2 } from "../../component/buttons/Buttons";
import { ArrowRight } from "../../assets/icons/icons";

const Refund = () => {
  return (
    <>
      <InnerBanner heading="Refund Payment" />

      <div className="RefundPage py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="RefundPage__form">
                <Container>
                  <Row className="justify-content-center">
                    <Col md={4}>
                      <Row>
                        <Col md="12">
                          <div className="upload">
                            <label>Upload Document</label>
                            <div className="upload__Inner">
                              <input type="file" id="file" />
                              <label htmlFor="file">Upload File</label>
                            </div>
                          </div>
                        </Col>
                        <Col md="12">
                          <Input
                            type="text"
                            label="Name"
                            placeholder="Enter Name"
                            star={"*"}
                          />
                        </Col>
                        <Col md="12">
                          <Input
                            type="email"
                            label="Email"
                            placeholder="Enter Email"
                            star={"*"}
                          />
                        </Col>
                        <Col md="12 mt-4">
                          <div className="full-width">
                          <Button2
                            type="submit"
                            title="Submit"
                            icon={<ArrowRight />}
                          />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Refund;
