import React from "react";
import { createUseStyles } from "react-jss";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";

const useStyles = createUseStyles({
  header: {
    float: "right",
    width: "50%",
    dispaly: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "sticky",
    right: 0,
    top: 0,
    backgroundColor: "white",
    opacity: 0.75
  },

  header__topMenu: {
    paddingRight: "7.5%"
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.header__topMenu}>
        <LoginRegister />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
