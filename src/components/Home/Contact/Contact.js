import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import contactBackgroundImage from "../../../assets/img/Background-Contact-Form.jpg";
import decoration from "../../../assets/Decoration.svg";

const useStyles = createUseStyles({
  contact: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${contactBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.5
  },

  contact__form: {
    width: "28%",
    display: "flex",
    flexDirection: "column"
  },

  contact__form_title: {
    width: "19%"
  },
  contact__form_title_decoration: {
    width: "13%",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },

  contact__form_user_data: {
    display: "flex",
    flexDirection: "row"
  },
  contact__form_user_data_input: {
    display: "block",
    width: "256px"
  },

  contact__form_user_data_label: {
    fontSize: "16px",
    display: "block"
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contact__form_title}>Skontaktuj się z nami</div>
      <div className={classes.contact__form_title_decoration}></div>
      <form className={classes.contact__form}>
        <div className={classes.contact__form_user_data}>
          <label className={classes.contact__form_user_data_label}>
            Wpisz swoje imię
          </label>
          <input
            className={classes.contact__form_user_data_input}
            type="text"
            value={form.name}
            onChange={event => {
              setForm({ ...form, ...{name: event.target.value}  });
            }}
          />
          <label className={classes.contact__form_user_data_label}>
            Wpisz swój email
          </label>
          <input
            className={classes.contact__form_user_data_input}
            type="email"
            value={form.email}
            onChange={event => {
              setForm({ email: event.target.value });
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
            value={form.message}
            onChange={event => {
              setForm({ message: event.target.value });
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
