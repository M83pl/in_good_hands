import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import urlDecoration from "../../assets/Decoration.svg";
import {
  sectionsBackground,
  threeColumnsBackground
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
    border: "none",
    backgroundColor: "transparent",
    width: "10vw",
    fontSize: "1.25rem",
    padding: "0.75rem",

    "&:hover": {
      color: `${threeColumnsBackground}`
    }
  },
  login__box_buttons_button_border: {
    border: `0.75px solid ${threeColumnsBackground}`
  }
});

const Register = props => {
  const classes = useStyles();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    password2: ""
  });
  const history = useHistory();
  return (
    <>
      <Header user={props.user} />
      <section className={classes.login}>
        <h1 className={classes.login__title}>Załóż konto</h1>
        <div className={classes.login__decoration} />
        <div className={classes.login__box}>
          <form className={classes.login__box_form}>
            <label className={classes.login__box_form_label}>Email</label>
            <input
              type="email"
              className={classes.login__box_form_input}
              value={login.email}
              onChange={event => {
                setLogin({ ...login, ...{ email: event.target.value } });
              }}
            ></input>
            <label className={classes.login__box_form_label}>Hasło</label>
            <input
              type="password"
              className={classes.login__box_form_input}
              value={login.password}
              onChange={event => {
                setLogin({ ...login, ...{ password: event.target.value } });
              }}
            ></input>
            <label className={classes.login__box_form_label}>
              Powtórz hasło
            </label>
            <input
              type="password"
              className={classes.login__box_form_input}
              value={login.password2}
              onChange={event => {
                setLogin({ ...login, ...{ password2: event.target.value } });
              }}
            ></input>
          </form>
          <div className={classes.login__box_buttons}>
            <button
              className={classes.login__box_buttons_button}
              onClick={() => {
                history.push("/logowanie");
              }}
            >
              Zaloguj się
            </button>
            <button
              className={
                classes.login__box_buttons_button +
                " " +
                classes.login__box_buttons_button_border
              }
            >
              Załóż konto
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
