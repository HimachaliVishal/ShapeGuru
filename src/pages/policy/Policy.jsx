import React from "react";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import './Policy.scss'

const Policy = () => {
  return (
    <>
      <InnerBanner heading="Policy" />

      <div className="policyPage py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="policyPage__text">
                <small>Effective Date: 17/September/2023</small>
                <h2>Introduction</h2>
                <p>
                  Welcome to the ShapeGuru Privacy Policy. We understand that
                  you may not be as enthusiastic about this document as we are,
                  but please bear with us. We want to ensure that you have all
                  the information you need about how we handle your data when
                  you use our services.
                </p>

                <h3>1. Data Collection</h3>
                <ul>
                  <li>
                    <b>Personal Information:</b> To provide our services, we may
                    collect personal data such as your name, email address, and
                    other personal details. This information is necessary for us
                    to tailor our offerings to your needs
                  </li>
                  <li>
                    <b>Usage Information:</b> We also gather data regarding your
                    interactions with our website. This includes your browsing
                    history, the pages you visit, and the timing of your visits.
                    We collect this data for analytical purposes, helping us
                    understand how our services are used.
                  </li>
                  <li>
                    <b> Device Information:</b> When you access our website, we
                    may collect information about the device you are using,
                    including its type, operating system, and unique
                    identifiers. Rest assured, this data is used solely to
                    enhance your experience.
                  </li>
                </ul>

                <h3>2. Utilising Your Information</h3>
                <ul>
                  <li>
                    <b>Service Provision:</b> We process your personal
                    information to deliver our services effectively. Your data
                    allows us to provide you with the personalised experience
                    you deserve.
                  </li>
                  <li>
                    <b>Analysis:</b> For quality assurance and service
                    enhancement, we perform statistical analyses using your
                    information. These insights help us make our offerings more
                    efficient and effective.
                  </li>
                  <li>
                    <b> *Marketing (We Promise It's Not Too Exciting):</b>From
                    time to time, we may send you promotional materials and
                    newsletters. However, if you find this information
                    overwhelming, you can easily opt out. We respect your inbox
                    space.
                  </li>
                </ul>

                <h3>3. Sharing Data (Bear with Us)</h3>
                <ul>
                  <li>
                    <b>Third-Party Service Providers:</b>
                    Occasionally, we may share your information with third-party
                    service providers. They assist us in delivering our services
                    but are bound by strict confidentiality agreements. It's all
                    very secure and procedural.
                  </li>
                  <li>
                    <b>Legal Obligations:</b> If the legal authorities come
                    knocking, we may need to disclose your data. We promise we
                    won't do it unless we absolutely have to. Boring legal
                    stuff, we know.
                  </li>
                </ul>

                <h3>4. Data Security (We Take This Seriously)</h3>
                <p>
                  We have implemented robust security measures to protect your
                  data from unauthorised access, disclosure, alteration, or
                  destruction. We won't bore you with the technical details, but
                  rest assured, we've got it covered.
                </p>

                <h3>5. Your Choices (We Keep It Simple)</h3>
                <p>
                  You have the power to inquire about the personal data we have
                  collected from you. If you have any questions or want to know
                  what information we hold, feel free to reach out. We're here
                  to assist you in understanding how your data is managed.
                </p>

                <h3>6. Cookies and Tracking (Slightly Technical)</h3>
                <p>
                  We use cookies and similar technologies to improve your
                  experience on our website. You can manage your cookie
                  preferences through your browser settings. If you're curious,
                  we can delve into the technical aspects, but it's not very
                  thrilling.
                </p>

                <h3>7. Children's Privacy (We're for Grown-Ups)</h3>
                <p>
                  ShapeGuru is intended for adults. We don't knowingly collect
                  data from anyone under 13 years old. It's just not our thing.
                </p>

                <h3>8. Changes to this Policy (We Keep You Updated)</h3>
                <p>
                  We may update this policy. But don't worry; we'll post the
                  changes right here. The date will change, too. Not the most
                  exciting update, we know.
                </p>

                <h3>9. Contact Us (We're Here If You Need Us)</h3>
                <p>
                  If you ever have questions about this Privacy Policy or your
                  data, please reach out to our Data Protection Officer at
                  [email address]. We're here to help.
                </p>

                <h5>
                  Thank you for taking the time to read this lengthy and
                  somewhat boring privacy policy. We promise it's all in the
                  interest of transparency and ensuring your data is handled
                  with care.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Policy;
