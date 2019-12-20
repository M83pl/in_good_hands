import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Footer from "../Footer/Footer";
import contactBackgroundImage from "../../../assets/img/Background-Contact-Form.jpg";
import decoration from "../../../assets/Decoration.svg";
import {
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";

const useStyles = createUseStyles({
  contact: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    "&::after": {
      content: "''",
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${contactBackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      opacity: 0.5,
      position: "absolute",
      zIndex: -1,
      top: 0
    }
  },
  contact__main_content: {
    width: "40%",
    paddingRight: "5%",
    paddingLeft: "5%",
    position: "absolute",
    right: 0,
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  contact__form_title: {
    width: "100%",
    fontSize: "1.75rem",
    textAlign: "center"
  },

  contact__form_title_decoration: {
    width: "50%",
    height: "2rem",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "fill",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem"
  },

  contact__form: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },

  contact__form_user_data: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  contact__form_user_data_box: {
    width: "40%"
  },

  contact__form_label: {
    width: "100%",
    paddingTop: "2rem",
    display: "block",
    fontSize: "0.75rem"
  },

  contact__form_input: {
    backgroundColor: "transparent",
    marginTop: "0.7rem",
    border: "none",
    borderBottom: `0.75px solid black`,
    display: "block",
    width: "100%",
    fontSize: "1rem"
  },

  contact__form_message: {
    width: "100%",
    height: "6rem",
    textAlign: "justify"
    // textJustify: "inter-word"
  },
  contact__form_button: {
    backgroundColor: "transparent",
    border: `0.75px solid ${mainTextColor}`,
    marginTop: "2.5rem",
    width: "30%",
    height: "3rem",
    fontSize: "1rem",
    fontFamily: "Open Sans",
    alignSelf: "flex-end",
    "&:hover": {
      border: `0.75px solid ${threeColumnsBackground}`
    }
  },
  contact__footer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
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
      <div className={classes.contact__main_content}>
        <h1 className={classes.contact__form_title}>Skontaktuj się z nami</h1>
        <div className={classes.contact__form_title_decoration} />
        <form className={classes.contact__form}>
          <div className={classes.contact__form_user_data}>
            <div className={classes.contact__form_user_data_box}>
              <label className={classes.contact__form_label}>
                Wpisz swoje imię
              </label>
              <input
                className={classes.contact__form_input}
                type="text"
                placeholder="Krzysztof"
                value={form.name}
                onChange={event => {
                  setForm({ ...form, ...{ name: event.target.value } });
                }}
              />
            </div>
            <div className={classes.contact__form_user_data_box}>
              <label className={classes.contact__form_label}>
                Wpisz swój email
              </label>
              <input
                className={classes.contact__form_input}
                type="email"
                placeholder="abc@xyz.pl"
                value={form.email}
                onChange={event => {
                  setForm({ ...form, ...{ email: event.target.value } });
                }}
              />
            </div>
          </div>
          <div className={classes.contact__form_user_message}>
            <label className={classes.contact__form_label}>
              Wpisz swoją wiadomość
            </label>
            <textarea
              className={
                classes.contact__form_input +
                " " +
                classes.contact__form_message
              }
              type="text-area"
              value={form.message}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos sapiente, sequi reiciendis soluta tenetur odio. Commodi totam eos tempora iste optio officiis sed, similique aliquid itaque. Possimus, libero rem?"
              onChange={event => {
                setForm({ ...form, ...{ message: event.target.value } });
              }}
            />
          </div>
          <button className={classes.contact__form_button}>Wyślij</button>
        </form>
      </div>
      <Footer specialClass={classes.contact__footer} />
    </section>
  );
};

export default Contact;
