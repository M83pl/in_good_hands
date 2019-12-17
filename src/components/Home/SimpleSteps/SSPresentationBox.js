import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sspresentationBox: {
    width: 131
  },

  sspresentationBox__icon: {
    width: "5rem",
    height: "5rem",
    margin: "0px 24px 8px 24px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },

  sspresentationBox__title: {
    width: "100%",
    fontSize: "1.125rem",
    textAlign: "center"
  },

  sspresentationBox__line: {
    width: "4.375rem‬",
    marginTop: "0.5rem",
    marginBottom: "0.5rem"
  },

  sspresentationBox__paragraph: {
    width: "100%",
    fontSize: "1rem",
    textAlign: "center"
  }
});
const SSPresentationBox = props => {
  const classes = useStyles();
  return (
    <div className={classes.sspresentationBox}>
      <div
        className={classes.sspresentationBox__icon}
        style={{ backgroundImage: `url(${props.imagePath}` }}
      ></div>
      <h1 className={classes.sspresentationBox__title}>{props.title}</h1>
      <hr className={classes.sspresentationBox__line} />
      <p className={classes.sspresentationBox__paragraph}>{props.paragraph}</p>
    </div>
  );
};

export default SSPresentationBox;
