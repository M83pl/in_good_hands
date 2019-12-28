import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { createUseStyles } from "react-jss";
import { threeColumnsBackground } from "../../scss/settings/colors";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = createUseStyles({
  active: {
    border: `0.75px solid ${threeColumnsBackground}`
  },
  header__nav: {
    width: "100%"
  },
  header__nav_list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    listStyle: "none",
    width: "100%"
  },
  header__nav_list_item: {
    display: "block",
    boxSizing: "border-box",
    fontSize: "12px",
    padding: "9px 20px",

    "&:hover": {
      borderBottom: `2px solid ${threeColumnsBackground}`
    }
  }
});

const Navigation = props => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const options = {
    activeClass: classes.active,
    duration: 1000,
    smooth: "easeInOutQuad",
    spy: true,
    className: classes.header__nav_list_item
  };

  const handleNav = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return (
    <nav className={classes.header__nav}>
      <ul className={classes.header__nav_list}>
        <li>
          <LinkScroll to="start" {...options} onClick={handleNav}>
            Start
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="whats_about" {...options} onClick={handleNav}>
            O co chodzi?
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="about_us" {...options} onClick={handleNav}>
            O nas
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="funds_orgs" {...options} onClick={handleNav}>
            Fundacja i organizacje
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="contact" {...options} onClick={handleNav}>
            Kontakt
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
