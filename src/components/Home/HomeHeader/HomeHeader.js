import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const options = {
  activeClass: "active",
  duration: 1000
};

const HomeHeader = () => {
  return (
    <header>
      <Link to="/logowanie">Logowanie</Link>
      <Link to="/rejestracja">Rejestracja</Link>
      <ul>
        <li>
          <LinkScroll to="contact" {...options}>
            Kontakt
          </LinkScroll>
        </li>
      </ul>
    </header>
  );
};

export default HomeHeader;
