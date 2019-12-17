import React from "react";
import { Link as LinkScroll, scrollSpy } from "react-scroll";
import { createUseStyles } from "react-jss";
import { threeColumnsBackground } from "../../scss/settings/colors";

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

const Navigation = () => {
  const classes = useStyles();
  const options = {
    activeClass: classes.active,
    duration: 1000,
    smooth: "easeInOutQuad",
    spy: true,
    className: classes.header__nav_list_item
  };

  return (
    <nav className={classes.header__nav}>
      <ul className={classes.header__nav_list}>
        <li>
          <LinkScroll to="start" {...options}>
            Start
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="whats_about"
            {...options}
            className={classes.header__nav_list_item}
          >
            O co chodzi?
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="about_us"
            {...options}
            className={classes.header__nav_list_item}
          >
            O nas
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="funds_orgs"
            {...options}
            className={classes.header__nav_list_item}
          >
            Fundacja i organizacje
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="contact"
            {...options}
            className={classes.header__nav_list_item}
          >
            Kontakt
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
