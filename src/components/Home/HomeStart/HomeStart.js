import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";

import urlImage from "../../../assets/img/Home-Hero-Image.jpg";
import urlDecoration from "../../../assets/Decoration.svg";
import {
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";

const useStyles = createUseStyles({
  start: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "contain",
    backgroundImage: `url(${urlImage})`,
    backgroundPosition: -270,
    backgroundRepeat: "no-repeat"
  },
  start__content: {
    minHeight: "100vh",
    paddingRight: "7.5%",
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  start__content_title: {
    fontSize: "1.75rem",
    textAlign: "center"
  },

  start__content_decoration: {
    width: "30%",
    backgroundImage: `url(${urlDecoration})`,
    height: "3rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "1.5rem",
    marginBottom: "4rem"
  },
  start__content_buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0.2rem"
  },
  start__content_buttons_button: {
    textDecoration: "none",
    textAlign: "center",
    fontSize: "1.5rem",
    width: "10rem",
    height: "5rem",
    border: `0.75px solid ${mainTextColor}`,
    padding: "0.8rem 2rem",

    "&:hover": {
      color: `${mainTextColor}`,
      border: `0.75px solid ${threeColumnsBackground}`
    },
    "&:visited": {
      color: `${mainTextColor}`,
      border: `0.75px solid ${mainTextColor}`
    }
  }
});

const HomeStart = props => {
  const classes = useStyles();

  return (
    <section id="start" className={classes.start}>
      <div className={classes.start__content}>
        <h1 className={classes.start__content_title}>Zacznij pomagać!</h1>
        <h1 className={classes.start__content_title}>
          Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <div className={classes.start__content_decoration} />

        <div className={classes.start__content_buttons}>
          <NavLink
            to="/logowanie"
            className={classes.start__content_buttons_button}
          >
            ODDAJ RZECZY
          </NavLink>
          <NavLink
            to="/logowanie"
            className={classes.start__content_buttons_button}
          >
            ZORGANIZUJ ZBÓRKĘ
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeStart;
