import React from "react";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { ArrowRight, CalendarIcon, UserIcon } from "../../assets/icons/icons";
import { Col, Container, Row } from "react-bootstrap";
import { expert1 } from "../../assets/images/images";
import { Link } from "react-router-dom";
import Input, { Textarea } from "../../component/Input/Input";
import { Button2 } from "../../component/buttons/Buttons";
const SingleBlog = () => {
  return (
    <>
      <InnerBanner heading="Single Blog" />
      <div className="SingleblogPage">
        <div className="blogPage pb-5">
          <Container>
            <Row className="justify-content-center">
              <Col md="10">
                <div className="col-md-12">
                  <div className="BlogItem BlogItem__big">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>
                            <UserIcon />
                          </span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>
                            <CalendarIcon />
                          </span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Reprehenderit totam
                        cupiditate ipsam distinctio, inventore doloremque
                        consequatur aliquam. Vitae iure earum quisquam ducimus
                        iusto qui doloribus rem dolor quibusdam ex! Quam. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Reprehenderit totam
                        cupiditate ipsam distinctio, inventore doloremque
                        consequatur aliquam. Vitae iure earum quisquam ducimus
                        iusto qui doloribus rem dolor quibusdam ex! Quam. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Reprehenderit totam
                        cupiditate ipsam distinctio, inventore doloremque
                        consequatur aliquam. Vitae iure earum quisquam ducimus
                        iusto qui doloribus rem dolor quibusdam ex! Quam. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>

                    </div>
                  </div>
                </div>


                <div className="leaveReply">
                    <h4>Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    <Row>
                     <Col md="12">
                        <Input type="text" label="Name" placeholder="Enter Name" star="*"/>
                     </Col>
                     <Col md="6">
                        <Input type="email" label="Email" placeholder="Enter Email" star="*"/>
                     </Col>
                     <Col md="6">
                        <Input type="text" label="Website" placeholder="Enter Website" star="*"/>
                     </Col>
                     <Col md="12 mb-4">
                      <Textarea rows="6" label="Comment" placeholder="Enter Comment"/>
                     </Col>
                     <Col md="12">
                     <Button2
                    title="Submit"
                    icon={<ArrowRight />}
                    
                  />
                     </Col>
                    </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

       
      </div>
    </>
  );
};

export default SingleBlog;
