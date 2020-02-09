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
  const [data, setData] = useState(null);
  const [list, setList] = useState(null);
  const [buttons, setButtons] = useState(null);

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

  function dataFetch() {
    const dataUrl = `http://localhost:3001/${page.cathegoryName}?_page=${page.number}&_limit=${page.limit}`;
    // const url2 = `https://my-json-server.typicode.com/M83pl/in_good_hands/blob/master/${description.name}?_page=${paginate.page}&_limit=${paginate.limit}`;
    console.log("data fetch... ");

    fetch(dataUrl, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          console.log("data total");
          setPage({
            ...page,
            ...{ total: response.headers.get("X-Total-Count") }
          });
          return response.json();
        } else {
          throw new Error("Target page not found.");
        }
      })
      .then(resp => {
        setData(resp);
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

  // download data to display in the list
  useEffect(() => {
    if (page.cathegoryDesc !== "Wczytuję opis...") {
      dataFetch();
    }
    // eslint-disable-next-line
  }, [page.cathegoryName, page.cathegoryDesc, page.number]);

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

  // handle page select
  const handlePage = event => {
    if (page.number !== event.target.id) {
      console.log("page select");
      setPage({ ...page, ...{ number: event.target.id } });
    } else {
      return null;
    }
  };

  useEffect(() => console.log(page.total), [page.total]);

  //update to state with list. works every time data changes
  useEffect(() => {
    if (data !== null) {
      console.log("list generation...");
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
    // paginate buttons render
    const pagesCount = Math.ceil(page.total / 3);
    if (pagesCount <= 1) {
      let extender = () => {
        return (
          <button id="1" className={classes.whoWeHelp__pagination_button}>
            {" "}
          </button>
        );
      };
      setButtons(extender);
    } else {
      let buttons = [];
      for (let i = 1; i <= pagesCount; i++) {
        let buttonClass = "";
        if (i === page.number) {
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
      setButtons(buttons);
    }
    // eslint-disable-next-line
  }, [page.number, page.total, classes]);

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
      <ul>{list}</ul>
      <div className={classes.whoWeHelp__pagination_buttons}>{buttons}</div>
    </section>
  );
}

export default WhoWeHelp;
