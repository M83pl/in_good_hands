import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
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
  },

  whoWeHelp__list_item: {
    borderBottom: `0.75px solid ${mainTextColor}`,
    padding: "0.8rem 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  whoWeHelp__list_item_header: {
    fontSize: "1.25rem",
    paddingBottom: "0.25rem"
  },
  whoWeHelp__list_item_subheader: {
    fontSize: "0.8rem",
    fontFamily: "Merriweather"
  },
  whoWeHelp__list_item_desc: {
    fontSize: "0.8rem",
    fontFamily: "Merriweather"
  },

  whoWeHelp__list_item_no_border: {
    border: "none"
  },

  whoWeHelp__pagination_buttons: {
    paddingTop: "0.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  whoWeHelp__pagination_button: {
    background: "none",
    border: "none",
    margin: "0.5rem 1rem",
    padding: "1rem",
    textAlign: "center",
    width: "3rem",

    "&:hover": {
      border: `2px solid ${threeColumnsBackground}`
    }
  },
  whoWeHelp__pagination_button_active: {
    border: `0.75px solid ${mainTextColor}`
  }
});

const WhoWeHelp = () => {
  const classes = useStyles(); //assigning styles to a variable

  const [description, setDescription] = useState({
    id: 0,
    name: " ",
    desc: "Wczytuję opis..."
  });
  const [option, setOption] = useState(1);
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 3,
    total: 0,
    counter: 0
  });
  const [currPage, setCurrPage] = useState(1);
  const [data, setData] = useState(null);
  const [list, setList] = useState();
  const [buttons, setButtons] = useState(null);

  //download description for a given category, every time description or option changes
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
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [description, option]);

  //downloading data to display in the list, works on description, paginate, data or currPage change
  useEffect(() => {
    const url2 = `http://localhost:3001/${description.name}?_page=${paginate.page}&_limit=${paginate.limit}`;
    if (
      data === null ||
      currPage.page !== paginate.page ||
      currPage.description !== description.name
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
          setData(resp);
          setCurrPage({
            ...{ page: paginate.page },
            ...{ description: description.name }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [description, paginate, data, currPage]);

  //update to state with list. works every time data changes
  useEffect(() => {
    if (data !== null) {
      setList(
        data.map((item, index) => {
          if (index < data.length - 1) {
            return (
              <li key={index} className={classes.whoWeHelp__list_item}>
                <div>
                  <div className={classes.whoWeHelp__list_item_header}>
                    {item.header}
                  </div>
                  <div className={classes.whoWeHelp__list_item_subheader}>
                    {item.subheader}
                  </div>
                </div>
                <div className={classes.whoWeHelp__list_item_desc}>
                  {item.desc}
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className={
                  classes.whoWeHelp__list_item +
                  " " +
                  classes.whoWeHelp__list_item_no_border
                }
              >
                <div>
                  <div className={classes.whoWeHelp__list_item_header}>
                    {item.header}
                  </div>
                  <div className={classes.whoWeHelp__list_item_subheader}>
                    {item.subheader}
                  </div>
                </div>
                <div className={classes.whoWeHelp__list_item_desc}>
                  {item.desc}
                </div>
              </li>
            );
          }
        })
      );
    }
  }, [data, classes]);

  //update to state with paginate buttons. works every time paginate changes
  useEffect(() => {
    // handle page select
    const handlePage = event => {
      if (paginate.page !== event.target.id) {
        setPaginate({ ...paginate, ...{ page: event.target.id } });
        const currentButton = document.getElementsByClassName(
          `${classes.whoWeHelp__pagination_button_active}`
        );
        currentButton[0].className = currentButton[0].className.replace(
          ` ${classes.whoWeHelp__pagination_button_active}`,
          ""
        );
        event.target.className += ` ${classes.whoWeHelp__pagination_button_active}`;
      } else {
        return null;
      }
    };

    // paginate buttons render
    const pagesCount = Math.ceil(paginate.total / 3);
    if (pagesCount <= 1) {
      console.log("tylko jedna strona");
      setButtons("");
    } else {
      console.log("wiecej stron: ", pagesCount);
      let buttons = [];
      for (let i = 1; i <= pagesCount; i++) {
        let buttonClass = "";
        if (i === paginate.page) {
          buttonClass =
            classes.whoWeHelp__pagination_button +
            " " +
            classes.whoWeHelp__pagination_button_active;
        } else {
          buttonClass = classes.whoWeHelp__pagination_button;
        }
        buttons.push(
          <button key={i} id={i} onClick={handlePage} className={buttonClass}>
            {i}
          </button>
        );
      }
      console.log(buttons);
      setButtons(buttons);
    }
  }, [data, paginate, classes]);

  // handle cathegory select
  const handleButton = event => {
    if (option !== event.target.dataset.name) {
      setOption(parseInt(event.target.id));
      setPaginate({ ...paginate, ...{ page: 1 } });
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
      <ul>{list}</ul>
      <div className={classes.whoWeHelp__pagination_buttons}>{buttons}</div>
    </section>
  );
};

export default WhoWeHelp;
