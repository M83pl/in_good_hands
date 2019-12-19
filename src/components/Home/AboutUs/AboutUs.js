import React from "react";
import { createUseStyles } from "react-jss";

import aboutBackgrond from "../../../assets/img/People.jpg";
import decoration from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";

const useStyles = createUseStyles({
  aboutUs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh"
  },
  aboutUs__content: {
    width: "50%"
  },
  aboutUs__content_header: {
    width: "100%",
    textAlign: "center",
    marginTop: "20%",
    marginBottom: 26,
    display: "block",
    fontSize: 38
  },
  aboutUs__content_decoration: {
    margin: "auto",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 253,
    height: 33
  },
  aboutUs__content_paragraph: {
    textAlign: "justify",
    margin: "0 15%",
    marginTop: 55,
    marginBottom: 40
  },
  aboutUs__content_signature: {
    backgroundImage: `url(${signature})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "16%",
    width: "22%",
    marginLeft: "63%",
    marginRight: "15%"
  },
  aboutUs__image: {
    width: "50vw",
    nimHeight: "100vh",
    backgroundImage: `url(${aboutBackgrond})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
});

const AboutUs = () => {
  const classes = useStyles();

  return (
    <section className={classes.aboutUs} id="about_us">
      <div className={classes.aboutUs__content}>
        <h1 className={classes.aboutUs__content_header}>O nas</h1>
        <div className={classes.aboutUs__content_decoration}></div>
        <p className={classes.aboutUs__content_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
          sapiente, sequi reiciendis soluta tenetur odio. Commodi totam eos
          tempora iste optio officiis sed, similique aliquid itaque. Possimus,
          libero rem?
        </p>
        <div className={classes.aboutUs__content_signature}></div>
      </div>
      <div className={classes.aboutUs__image}></div>
    </section>
  );
};

export default AboutUs;
