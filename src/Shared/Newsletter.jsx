import React from "react";
import "./Newsletter.css";

import { Container, Row, Col } from "reactstrap";
import MaleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get Useful Traveling Information</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter Your Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Stay informed with essential travel tips and insights.
                Subscribe now for valuable advice and updates to enhance your
                journeys.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={MaleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
