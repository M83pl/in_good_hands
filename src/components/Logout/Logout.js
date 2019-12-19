import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import urlDecoration from "../../assets/Decoration.svg";
import {
  sectionsBackground,
  threeColumnsBackground,
  mainTextColor
} from "../../scss/settings/colors";

const useStyles = createUseStyles({
  login: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  login__title: {
    fontSize: "1.75rem"
  },

  login__decoration: {
    width: "15vw",
    backgroundImage: `url(${urlDecoration})`,
    minHeight: "2rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "1.25rem",
    marginBottom: "2rem"
  },

  login__box: {
    width: "32vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  login__box_form: {
    width: "20vw",
    backgroundColor: `${sectionsBackground}`,
    padding: "2rem 3vw 2.75rem 3vw",
    marginBottom: "2.5rem"
  },
  login__box_form_label: {
    display: "block",
    paddingBottom: "0.5rem",
    paddingTop: "1rem",
    width: "100%",
    fontSize: "1rem"
  },
  login__box_form_input: {
    border: "none",
    fontSize: "1rem",
    paddingTop: "0.5rem",
    width: "100%",
    backgroundColor: "transparent",
    borderBottom: "0.75px solid black"
  },
  login__box_buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  login__box_buttons_button: {
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
  const [login, setLogin] = useState({ email: "", password: "" });
  const history = useHistory();
  return (
    <>
      <Header />
      <section className={classes.login}>
        <h1 className={classes.login__title}>
          Wylogowanie nastąpiło pomyślnie!
        </h1>
        <div className={classes.login__decoration} />
        <button
          className={classes.login__box_buttons_button}
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
