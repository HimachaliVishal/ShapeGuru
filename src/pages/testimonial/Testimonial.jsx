import React from "react";
import './Testimonial.scss'
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import { expert2 } from "../../assets/images/images";
import './Testimonial.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Testimonial = () => {
  return (
    <>
      <InnerBanner heading="Testimonials" />

      <div className="testimonialPage">
        <Container>
          <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry >

              <div className="testimonialItem">
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

              <div className="testimonialItem">
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

              <div className="testimonialItem">
                <div className="testimonial__content">
                  <p>
                    I am introverted and so I wthings I'm doing. All the
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

              <div className="testimonialItem">
                <div className="testimonial__content">
                  <p>
                    I am introverted and so I was always intimidated going to
                    the gym and group sessions. Now, I've gained a lot of
                    flexibility and am able to do difficult poses. I feel like
                    my body is accepting all the new things I'm doing. All the
                    credit goes to the teachers because they take you through
                    a journey! I am introverted and so I was always
                    intimidated going to the gym and 
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

              <div className="testimonialItem">
                <div className="testimonial__content">
                  <p>
                    I am introverted and so I was always intimidated going to
                    the gym and group sessions. Now, I've gained a lot of
                    flexibility and am able to do difficult poses. I feel like
                    my body is ais accepting all the new things
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

              <div className="testimonialItem">
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

              <div className="testimonialItem">
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

              <div className="testimonialItem">
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


            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </div>


    </>
  );
};

export default Testimonial;
