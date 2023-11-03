import React from "react";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <>
      <InnerBanner heading="About Us" joinbtn={true} />
      <div className="aboutPage py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="aboutPage__text">
                <h2>Journey</h2>
                <p>
                  At ShapeGuru, we are not just a fitness and wellness company;
                  we are the symbol of a powerful transformation. Our story
                  began with a simple yet great journey of self-discovery and
                  empowerment, driven by the passion of fitness. It all started
                  with our founder, who, like many of us, faced the challenges
                  of being criticised and bullied for being too skinny.
                </p>

                <h2>The Birth of a Vision</h2>
                <p>
                  But instead of letting negativity win,, our founder chose a
                  different path. Fueled by a burning desire to change and
                  inspired by the prospect of a healthier, happier future, they
                  explored the world of fitness and wellness. The journey was
                  not easy, but through absolute determination, they achieved
                  their fitness goals and gained newfound confidence.
                </p>
                <p>
                  However, the story didn't end there. Along the way, our
                  founder realised that they were not alone in their struggle.
                  Many others faced similar challenges, battling with issues of
                  being overweight or underweight, and struggling to find their
                  confidence. This revelation ignited a passionate mission - to
                  extend a helping hand to others who were on a similar journey.
                </p>

                <h2>A Community of Experts</h2>
                <p>
                  This is how ShapeGuru was born - a company that stands as a
                  beacon of hope for those seeking transformation. Our team at
                  ShapeGuru consists of individuals with over 10 years of
                  experience in the fitness industry. We understand your
                  struggles, your goals, and your unique journey, making us the
                  perfect companions on your path to becoming the best version
                  of yourself.
                </p>

                <h2>Tailored Solutions</h2>
                <p>
                  At ShapeGuru, we believe that every fitness journey is unique,
                  and there's no one-size-fits-all approach. That's why we offer
                  you the best of both worlds - personalised coaching and custom
                  diet plans. Our services are not only effective but also
                  incredibly flexible. We understand that life is dynamic, and
                  your fitness routine should be too. We adjust and adapt to
                  your lifestyle and schedule, ensuring that you never miss a
                  beat on your journey.
                </p>

                <h2>Real Transformations</h2>
                <p>
                  Don't just take our word for it. The ShapeGuru community has
                  countless success stories from people who've transformed their
                  lives with our guidance and support. They are living proof
                  that with dedication and the right team behind you, you can
                  achieve remarkable results.
                </p>

                <h2>Our Mission</h2>
                <p>
                  Our mission at ShapeGuru is simple - to empower you to achieve
                  your fitness goals, no matter how ambitious they may be. We
                  provide tailored solutions according to your fitness goals,
                  motivation to reach them, and continuous support to conquer
                  your fitness journey. With ShapeGuru by your side, you have
                  the assurance that you can achieve anything you set your mind
                  to.
                </p>
                <p>
                  Join us today, and together, we'll start a life-changing
                  journey towards fitness, confidence, and success. Shape Your
                  Fitness with ShapeGuru: Your Path to a Healthier You.
                </p>
                <p>Your transformation begins here</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
