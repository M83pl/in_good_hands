import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  whoWeHelp: {
    width: "100%",
    minHeight: "100vh"
  }
});
const WhoWeHelp = () => {
  const classes = useStyles();
  return (
    <section className={classes.whoWeHelp} id="funds_orgs">
      Who we help
    </section>
  );
};

export default WhoWeHelp;
