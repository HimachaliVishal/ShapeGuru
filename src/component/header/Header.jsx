import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.scss'
import { ShapeguruLogo } from "../../assets/icons/icons";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__inner">
          <Link to="/"><ShapeguruLogo width={140}/></Link>
          <div className="header__menu">
            <ul>

              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/testimonials">Testimonial</Link></li>
              <li><Link to="/journey">Journeys</Link></li>
            </ul>
          </div>


        </div>
      </Container>
    </div>
  )

};

export default Header;
