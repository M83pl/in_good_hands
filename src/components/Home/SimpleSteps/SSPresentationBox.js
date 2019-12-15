import React from "react";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  sspresentationBox: {
    width: 131
  },

  sspresentationBox__icon: {
    width: 83,
    height: 83,
    margin: "0px 24px 8px 24px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },

  sspresentationBox__title: {
    width: "100%",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },

  sspresentationBox__line: {
    width: 70,
    marginBottom: 10
  },

  sspresentationBox__paragraph: {
    width: "100%",
    fontSize: "16px",
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
