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
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "3.4375rem",
    paddingBottom: "5rem"
  },

  simpleSteps__title: {
    width: "100%",
    fontSize: "2.375rem",
    textAlign: "center",
    marginBottom: 25
  },

  simpleSteps__decoration: {
    alignSelf: "center",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 33,
    width: "13.3%",
    marginBottom: 34
  },

  simpleSteps__fourSteps: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: "21%",
    paddingRight: "21%",
    paddingTop: 73,
    paddingBottom: 80,
    width: "100%",
    backgroundColor: `${sectionsBackground}`
  },

  simpleSteps__link: {
    alignSelf: "center",
    boxSizing: "border-box",
    marginTop: "2.1875rem",
    padding: "1rem 6‬rem",
    width: "19.375rem",
    height: "7.5rem",
    fontSize: "2.25rem",
    border: "0.75px solid #3C3C3C",
    textAlign: "center",
    textDecoration: "none",

    "&:visited": {
      color: "#3C3C3C",
      textDecoration: `${mainTextColor}`
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
