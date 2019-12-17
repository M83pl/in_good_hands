import React from "react";
import { createUseStyles } from "react-jss";

// import Header from "../../Header/Header";
import urlImage from "../../../assets/img/Home-Hero-Image.jpg";
import urlDecoration from "../../../assets/Decoration.svg";

const useStyles = createUseStyles({
  start: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundSize: "contain",
    backgroundImage: `url(${urlImage})`,
    backgroundPosition: -270,
    backgroundRepeat: "no-repeat"
  },
  start__content: {
    paddingRight: "7.5%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },

  start__content_top_menu: {
    float: "right",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },

  start__content_main: {
    right: "15%",
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "200px"
  },

  start__content_decoration: {
    justifyContent: "center",
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
        <div className={classes.start__content_main}>
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          <div className={classes.start__content_decoration}></div>
        </div>
      </div>
    </section>
  );
};

export default HomeStart;
