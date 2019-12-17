import React from "react";
import { createUseStyles } from "react-jss";
import Header from "../Header/Header";

const useStyles = createUseStyles({});

const Register = props => {
  const classes = useStyles();
  return (
    <>
      <Header user={props.user}/>
      <section className={classes.register}>Register component</section>
    </>
  );
};

export default Register;
