import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import urlDecoration from "../../assets/Decoration.svg";
import {
  threeColumnsBackground,
  mainTextColor
} from "../../scss/settings/colors";

const useStyles = createUseStyles({
  logout: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  logout__title: {
    fontSize: "1.75rem"
  },

  logout__decoration: {
    width: "15vw",
    backgroundImage: `url(${urlDecoration})`,
    minHeight: "2rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "1.25rem",
    marginBottom: "2rem"
  },

  logout__box_button: {
    border: `0.75px solid ${mainTextColor}`,
    backgroundColor: "transparent",
    width: "12vw",
    fontSize: "1rem",
    padding: "0.75rem",

    "&:hover": {
      borderColor: `${mainTextColor}`,
      color: `${threeColumnsBackground}`
    }
  },
  login__box_buttons_button_border: {
    border: `0.75px solid ${threeColumnsBackground}`
  }
});

const Logout = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Header />
      <section className={classes.logout}>
        <h1 className={classes.logout__title}>
          Wylogowanie nastąpiło pomyślnie!
        </h1>
        <div className={classes.logout__decoration} />
        <button
          className={classes.logout__button}
          onClick={() => {
            history.push("/");
          }}
        >
          Strona główna
        </button>
      </section>
    </>
  );
};

export default Logout;
