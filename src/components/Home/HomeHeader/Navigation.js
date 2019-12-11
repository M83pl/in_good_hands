import React from "react";
import { Link as LinkScroll } from "react-scroll";

const options = {
  activeClass: "active",
  duration: 1000,
  smooth: "easeInOutQuad"
};

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul>
        <li>
          <LinkScroll to="start" {...options}>
            Start
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="whats_about" {...options}>
            O co chodzi?
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="about_us" {...options}>
            O nas
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="funds_orgs" {...options}>
            Fundacja i organizacje
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="contact" {...options}>
            Kontakt
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
