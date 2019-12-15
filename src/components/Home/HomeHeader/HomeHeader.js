import React from "react";
import { createUseStyles } from "react-jss";

import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import urlImage from "../../../assets/img/Home-Hero-Image.jpg";
import urlDecoration from "../../../assets/Decoration.svg";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },

  header__image: {
    width: "45%",
    backgroundSize: "cover",
    backgroundPosition: -270,
    backgroundImage: `url(${urlImage})`,
    backgroundRepeat: "no-repeat"
  },

  header__content: {
    paddingRight: "5%",
    width: "55%",
    display: "flex",
    flexDirection: "column"
  },

  header__content_top_menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },

  header__content_main: {
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "200px"
  },

  header__content_decoration: {
    justifyContent: "center",
    backgroundImage: `url(${urlDecoration})`,
    height: "35px",
    backgroundRepeat: "no-repeat"
  }
});

const HomeHeader = props => {
  const classes = useStyles();

  return (
    <header id="start" className={classes.header}>
      <div className={classes.header__image}></div>
      <div className={classes.header__content}>
        <div className={classes.header__content_top_menu}>
          <LoginRegister userName={props.userName} />
          <Navigation />
        </div>
        <div className={classes.header__content_main}>
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          <div className={classes.header__content_decoration}></div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
