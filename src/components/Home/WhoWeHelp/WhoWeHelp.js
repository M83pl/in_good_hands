import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import decoration from "../../../assets/Decoration.svg";

const useStyles = createUseStyles({
  whoWeHelp: {
    width: "100%",
    minHeight: "100vh",
    padding: "3rem 15vw",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  whoWeHelp__title: {
    marginTop: "0.5rem",
    width: "100%",
    fontSize: "2rem",
    textAlign: "center"
  },

  whoWeHelp__decoration: {
    alignSelf: "center",
    backgroundImage: `url(${decoration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "2rem",
    width: "15vw"
  }
});
const WhoWeHelp = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [option, setOption] = useState("Fundacjom");

  useEffect(() => {
    const url = "http://localhost:3001/fundations";
    fetch(url, {
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp);
      });
  });

  return (
    <section className={classes.whoWeHelp} id="funds_orgs">
      <h1 className={classes.whoWeHelp__title}>Komu pomagamy?</h1>
      <div className={classes.whoWeHelp__decoration} />
    </section>
  );
};

export default WhoWeHelp;
