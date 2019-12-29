import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import {
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";
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
  },

  whoWeHelp__buttons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 15vw"
  },

  whoWeHelp__button: {
    maxWidth: "12vw",
    padding: "0.75rem 1rem",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.25rem",

    "&:hover": {
      borderBottom: `0.75px solid ${threeColumnsBackground}`
    }
  },

  whoWeHelp__button_active: {
    border: `0.75px solid ${mainTextColor}`
  },

  whoWeHelp__description: {
    padding: "0 18vw",
    textAlign: "justify"
  }
});
const WhoWeHelp = () => {
  const classes = useStyles();
  const [data, setData] = useState({ id: 0, name: " ", desc: " " });
  const [option, setOption] = useState(1);

  useEffect(() => {
    const url = `http://localhost:3001/fundations/${option}`;
    if (data.id !== option) {
      fetch(url, {
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          setData(resp);
          console.log(resp);
        });
    }
  });

  const handleButton = event => {
    if (option !== event.target.dataset.name) {
      setOption(parseInt(event.target.id));
      const currentButton = document.getElementsByClassName(
        `${classes.whoWeHelp__button_active}`
      );
      currentButton[0].className = currentButton[0].className.replace(
        ` ${classes.whoWeHelp__button_active}`,
        ""
      );
      event.target.className += ` ${classes.whoWeHelp__button_active}`;
    } else {
      return null;
    }
  };

  return (
    <section className={classes.whoWeHelp} id="funds_orgs">
      <h1 className={classes.whoWeHelp__title}>Komu pomagamy?</h1>
      <div className={classes.whoWeHelp__decoration} />
      <div className={classes.whoWeHelp__buttons_container}>
        <button
          id="1"
          className={`${classes.whoWeHelp__button} ${classes.whoWeHelp__button_active}`}
          data-name="Fundacjom"
          onClick={handleButton}
        >
          Fundacjom
        </button>
        <button
          id="2"
          className={classes.whoWeHelp__button}
          data-name="Organizacjom"
          onClick={handleButton}
        >
          Organizacjom pozarządowym
        </button>
        <button
          id="3"
          className={classes.whoWeHelp__button}
          data-name="Lokalnym"
          onClick={handleButton}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className={classes.whoWeHelp__description}>{data.desc}</p>
    </section>
  );
};

export default WhoWeHelp;
