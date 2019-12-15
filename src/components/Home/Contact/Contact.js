import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import contactBackgroundImage from "../../../assets/img/Background-Contact-Form.jpg";

const useStyles = createUseStyles({
  contact: {
    display: "flex",
    flexDirection: "row",

    "&:after": {
      content: "",
      backgroundImage: `url(${contactBackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      opacity: 0.5,
      position: "absolute",
      zIndex: -1
    }
  },

  contact__form: {
    marginRight: 142,
    marginLeft: `{100%-528-142}`,
    width: 528,
    display: "flex",
    flexDirection: "column"
  },

  contact__form_user_data: {
    display: "flex",
    flexDirection: "row"
  },
  contact__form_user_data_input: {
    width: "256px"
  },

  contact__form_user_data_label: {
    fontSize: "16px",
    display: "block"
  },

  div: {
    display: "flex",
    flexDirection: "column"
  },

  contact__form_user_message: {
    width: "528px",
    display: "flex",
    flexDirection: "column",
    justifyItems: "left"
  },

  contact__form_user_message_label: {
    display: "block",
    width: "100%"
  },

  contact__form_user_message_input: {
    display: "block",
    width: "100%",
    height: 97
  }
});

const Contact = () => {
  const classes = useStyles();
  const [formName, setFormName] = useState("imię");
  const [formMail, setFormMail] = useState("em@il");
  const [formMessage, setFormMessage] = useState("Twoja wiadomość");

  return (
    <section className={classes.contact} id="contact">
      <form className={classes.contact__form}>
        <div className={classes.contact__form_user_data}>
          <label className={classes.contact__form_user_data_label}>
            Wpisz swoje imię
          </label>
          <input
            className={classes.contact__form_user_data_input}
            type="text"
            value={formName}
            onChange={event => {
              setFormName(event.target.value);
            }}
          />
          <label className={classes.contact__form_user_data_label}>
            Wpisz swój email
          </label>
          <input
            className={classes.contact__form_user_data_input}
            type="email"
            value={formMail}
            onChange={event => {
              setFormMail(event.target.value);
            }}
          />
        </div>
        <div className={classes.contact__form_user_message}>
          <label className={classes.contact__form_user_message_label}>
            Wpisz swoją wiadomość
          </label>
          <input
            className={classes.contact__form_user_message_input}
            type="text-area"
            value={formMessage}
            onChange={event => {
              setFormMessage(event.target.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
