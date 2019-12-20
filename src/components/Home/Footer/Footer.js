import React from "react";
import { createUseStyles } from "react-jss";
import facebookIcon from "../../../assets/Facebook.svg";
import instagramIcon from "../../../assets/Instagram.svg";

const useStyles = createUseStyles({
  footer: {
    textAlign: "center",
    padding: "1rem 0rem",
    width: "100%",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",

    "&:before": {
      height: 30,
      width: 30,
      position: "absolute",
      content: `url(${facebookIcon})`,
      right: 192
    },

    "&:after": {
      height: 30,
      width: 30,
      position: "absolute",
      content: `url(${instagramIcon})`,
      right: 142
    }
  },
  footer__text: {
    textAlign: "center",
    width: "100%"
  }
});

const Footer = props => {
  const classes = useStyles();
  const contactClass = props.specialClass;
  console.log(contactClass);
  return (
    <footer className={classes.footer + " " + contactClass}>
      <div className={classes.footer__text}>Copy rights by Coders Lab</div>
    </footer>
  );
};

export default Footer;
