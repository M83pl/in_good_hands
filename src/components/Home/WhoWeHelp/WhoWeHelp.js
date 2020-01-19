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

  const [description, setDescription] = useState({
    id: 0,
    name: " ",
    desc: " "
  });
  const [option, setOption] = useState(1);
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 3,
    total: 0,
    couter: 0
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const url1 = `http://localhost:3001/descriptions/${option}`;

    if (description.id !== option) {
      fetch(url1, {})
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Target page not found");
          }
        })
        .then(resp => {
          setDescription(resp);
          console.log(resp);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [description, option]);

  useEffect(() => {
    const url2 = `http://localhost:3001/${description.name}?_page=${paginate.page}&_limit=${paginate.limit}`;
    if (
      data === null ||
      data.page !== paginate.page ||
      data.description !== description.name
    ) {
      fetch(url2, {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            setPaginate({
              ...paginate,
              ...{ total: response.headers.get("X-Total-Count") }
            });
            return response.json();
          } else {
            throw new Error("Target page not found.");
          }
        })
        .then(resp => {
          setData({
            ...resp,
            ...{ page: paginate.page },
            ...{ description: description.name }
          });
          console.log(resp, "data url2 response");
        })
        .catch(error => {
          console.log(error);
        });
    }
    console.log(paginate, "end");
    console.log(data);
  }, [description, paginate, data]);

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
      <p className={classes.whoWeHelp__description}>{description.desc}</p>
      <div className={classes.whoWeHelp__list_box}>
        <ul className={classes.whoWeHelp__list}></ul>
      </div>
    </section>
  );
};

export default WhoWeHelp;
