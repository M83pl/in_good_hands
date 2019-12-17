import React from "react";
import { createUseStyles } from "react-jss";
import facebookIcon from "../../../assets/Facebook.svg";
import instagramIcon from "../../../assets/Instagram.svg";

const useStyles = createUseStyles({
  footer: {
    textAlign: "center",
    padding: "22px 0px",
    width: "100%",
    fontSize: "18px",
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

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__text}>Copy rights by Coders Lab</div>
    </footer>
  );
};

export default Footer;
