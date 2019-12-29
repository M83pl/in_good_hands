import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import {
  sectionsBackground,
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";

import SSPresentationBox from "./SSPresentationBox";
import decoration from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/icons/Icon-1.svg";
import icon2 from "../../../assets/icons/Icon-2.svg";
import icon3 from "../../../assets/icons/Icon-3.svg";
import icon4 from "../../../assets/icons/Icon-4.svg";

const useStyles = createUseStyles({
  simpleSteps: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "100vh",
    padding: "3rem 0rem"
  },

  simpleSteps__title: {
    marginTop: "0.5rem",
    width: "100%",
    fontSize: "2rem",
    textAlign: "center"
  },

  simpleSteps__decoration: {
    alignSelf: "center",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "2rem",
    width: "15vw"
  },

  simpleSteps__fourSteps: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "2rem 21vw",
    width: "100%",
    backgroundColor: `${sectionsBackground}`
  },

  simpleSteps__link: {
    alignSelf: "center",
    boxSizing: "border-box",
    // marginTop: "2.2rem",
    fontSize: "2rem",
    padding: "1.25rem 1.75rem",
    border: `0.75px solid ${mainTextColor}`,
    textDecoration: "none",

    "&:visited": {
      color: `${mainTextColor}`,
      textDecoration: "none"
    },
    "&:hover": {
      color: `${mainTextColor}`,
      textDecoration: "none",
      border: `0.75px solid ${threeColumnsBackground}`
    }
  }
});

const SimpleSteps = () => {
  const classes = useStyles();
  return (
    <section className={classes.simpleSteps} id="whats_about">
      <h1 className={classes.simpleSteps__title}>Wystarczą 4 proste kroki</h1>
      <div className={classes.simpleSteps__decoration}></div>
      <div className={classes.simpleSteps__fourSteps}>
        <SSPresentationBox
          imagePath={icon1}
          title="Wybierz rzeczy"
          paragraph="ubrania, zabawki, sprzęt i inne"
        />
        <SSPresentationBox
          imagePath={icon2}
          title="Spakuj je"
          paragraph="skorzystaj z worków na śmieci"
        />
        <SSPresentationBox
          imagePath={icon3}
          title="Zdecyduj komu chces pomóc"
          paragraph="wybierz zaufane miejsce"
        />
        <SSPresentationBox
          imagePath={icon4}
          title="Zamów kuriera"
          paragraph="kurier przyjedzie w dogodnym terminie"
        />
      </div>
      <Link to="/logowanie" className={classes.simpleSteps__link}>
        ODDAJ RZECZY
      </Link>
    </section>
  );
};

export default SimpleSteps;
