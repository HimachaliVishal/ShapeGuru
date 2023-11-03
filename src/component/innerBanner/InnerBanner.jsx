import React, { useState } from "react";
import "./InnerBanner.scss";
import { Container } from "react-bootstrap";
import BorderButton, { Button2 } from "../buttons/Buttons";
import { ArrowRight } from "../../assets/icons/icons";
import JoinModal from "../JoinModal/JoinModal";
const InnerBanner = ({heading,joinbtn}) => {
  const [show, setShow] = useState(false);

  

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <div className="InnerBanner py-5">
        <Container>
          <h1>{heading}</h1>

          {
            joinbtn  &&   <Button2
            title="Join Now"
            icon={<ArrowRight />}
            onClick={() => handleShow()}
          />
          }
         
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

export default InnerBanner;
