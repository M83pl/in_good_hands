import React from "react";
import { createUseStyles } from "react-jss";
import { threecolumnsNumbersColor } from "../../../scss/settings/colors";

const useStyles = createUseStyles({
  htc__messageBox: {
    width: "334px"
  },
  htc__messageBox_title: {
    color: `${threecolumnsNumbersColor}`,
    width: "100%",
    fontSize: "90px",
    textAlign: "center"
  },
  htc__messageBox_info: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "28px",
    fontSize: "18px",
    textAlign: "center"
  },
  htc__messageBox_description: {
    width: "100%",
    fontSize: "16px",
    textAlign: "center"
  }
});

const HTCMessageBox = props => {
  const classes = useStyles();
  return (
    <div className={classes.htc__messageBox}>
      <div className={classes.htc__messageBox_title}>{props.number}</div>
      <div className={classes.htc__messageBox_info}>{props.info}</div>
      <p className={classes.htc__messageBox_description}>{props.description}</p>
    </div>
  );
};

export default HTCMessageBox;
