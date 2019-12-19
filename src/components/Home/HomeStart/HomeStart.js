import React from "react";
import { createUseStyles } from "react-jss";

import urlImage from "../../../assets/img/Home-Hero-Image.jpg";
import urlDecoration from "../../../assets/Decoration.svg";

const useStyles = createUseStyles({
  start: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    minHeight: "100vh",
    margintop: "-5.5rem",
    backgroundSize: "contain",
    backgroundImage: `url(${urlImage})`,
    backgroundPosition: -270,
    backgroundRepeat: "no-repeat"
  },
  start__content: {
    paddingRight: "7.5%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  start__content_main: {
    right: "15%",
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "200px"
  },

  start__content_decoration: {
    backgroundImage: `url(${urlDecoration})`,
    height: "35px",
    backgroundRepeat: "no-repeat"
  }
});

const HomeStart = props => {
  const classes = useStyles();

  return (
    <section id="start" className={classes.start}>
      <div className={classes.start__content}>
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <div className={classes.start__content_decoration} />
      </div>
    </section>
  );
};

export default HomeStart;
