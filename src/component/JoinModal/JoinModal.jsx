import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Input, { CheckBox } from "../Input/Input";
import './JoinModal.scss'
import BorderButton, { Button2 } from "../buttons/Buttons";
import {  AnimatedLogo, ArrowRight } from "../../assets/icons/icons";
import { JoinUs } from "../../assets/images/images";
const JoinModal = ({ handleClose, show, size, title }) => {
  return (
    <Modal size={size} show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        
      </Modal.Header> */}

      <Modal.Body>
        <div className="joinModal">
          <Row className="g-0">
            <Col md={6}>
              <div className="joinModal__left">
            <img src={JoinUs} alt="JoinUs" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="joinModal__right ps-4">
                <Modal.Title>Join Us Now</Modal.Title>
                {/* <p className="joinModal__subTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, saepe voluptatem fugiat, </p> */}
                <form>
                  <Row>
                    <Col md="12">
                      <Input
                        type="text"
                        label="Full Name"
                        placeholder="Enter Full Name"
                        star={"*"}
                      />
                    </Col>
                    <Col md="12">
                     
                     <div className="inputRow">
                       <label>
                       Fitness Goal
                         <sup>*</sup>
                       </label>
                       <div className="inputRow__customcheck">
                         <div className="customCheckItem">
                           <input type="checkbox" id="select1" />
                           <label htmlFor="select1">Select 1</label>
                         </div>

                         <div className="customCheckItem">
                           <input type="checkbox" id="select2" />
                           <label htmlFor="select2">Select 2</label>
                         </div>

                         <div className="customCheckItem">
                           <input type="checkbox" id="select3" />
                           <label htmlFor="select3">Select 3</label>
                         </div>
                       </div>
                     </div>
                   </Col>
                    <Col md="12">
                      <Input
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        star={"*"}
                      />
                    </Col>

                    <Col md="12">
                      <Input
                        type="time"
                        label="Preferred time"
                        placeholder="Enter time"
                        star={"*"}
                      />
                    </Col>

                   

                    <Col md="12">
                      <Input
                        type="email"
                        label="Email"
                        placeholder="Email ID"
                        star={"*"}
                      />
                    </Col>

                    <Col md="12">
                      <div className="formButton">
                     
                     <Button2 type="submit" title="Submit" icon={<ArrowRight />}/>
                      </div>
                   
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      {/* <Modal.Footer> */}
      {/* <button onClick={handleClose}>close</button> */}
      {/* </Modal.Footer> */}
    </Modal>
  );
};

export default JoinModal;
