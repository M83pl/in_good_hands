import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import WhoWeHelpList from "./WhoWeHelpList";
import {
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";
import decoration from "../../../assets/Decoration.svg";

// component styles
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

function WhoWeHelp() {
  // assigning styles to a variable
  const classes = useStyles();

  // setting some states to component
  const [page, setPage] = useState({
    cathegoryId: 1,
    cathegoryName: "fundations",
    cathegoryDesc: "Wczytuję opis...",
    number: 1,
    limit: 3,
    total: 0,
    counter: 0
  });

  function cathegoryFetch(target) {
    console.log(`cathegory fetch...`);
    const cathegoryUrl = `http://localhost:3001/descriptions/${target}`;
    fetch(cathegoryUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Target page not found");
        }
      })
      .then(resp => {
        setPage({
          ...page,
          ...{
            cathegoryId: resp.id,
            cathegoryName: resp.name,
            cathegoryDesc: resp.desc
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // download description for a given cathegory
  useEffect(() => {
    cathegoryFetch(page.cathegoryId);
    // eslint-disable-next-line
  }, [page.cathegoryId]);

  // handle cathegory select
  const handleCathegory = event => {
    if (page.cathegoryId !== parseInt(event.target.id)) {
      console.log(
        "cathegory changed from " +
          page.cathegoryId +
          " to " +
          parseInt(event.target.id)
      );
      setPage({
        ...page,
        ...{ cathegoryId: parseInt(event.target.id), number: 1 }
      });
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
          onClick={handleCathegory}
        >
          Fundacjom
        </button>
        <button
          id="2"
          className={classes.whoWeHelp__button}
          data-name="Organizacjom"
          onClick={handleCathegory}
        >
          Organizacjom pozarządowym
        </button>
        <button
          id="3"
          className={classes.whoWeHelp__button}
          data-name="Lokalnym"
          onClick={handleCathegory}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className={classes.whoWeHelp__description}>{page.cathegoryDesc}</p>
      <WhoWeHelpList
        cathegoryName={page.cathegoryName}
        pageNumber={page.number}
      />
    </section>
  );
}

export default WhoWeHelp;
