import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import {
  mainTextColor,
  threeColumnsBackground
} from "../../../scss/settings/colors";

const useStyles = createUseStyles({
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

const WhoWeHelpList = props => {
  const classes = useStyles();

  const [page, setPage] = useState({
    cathegoryName: "fundations",
    number: 1,
    limit: 3,
    total: 0
  });
  const [data, setData] = useState(null);
  const [list, setList] = useState(null);
  const [buttons, setButtons] = useState(null);

  useEffect(() => {
    console.log("cathegory check in list component");
    if (page.cathegoryName !== props.cathegoryName) {
      console.log("cathegory update in list component");
      setPage({
        ...page,
        ...{ number: 1 },
        ...{ cathegoryName: props.cathegoryName }
      });
    }
  }, [page, props.cathegoryName]);

  function dataFetch() {
    const dataUrl = `http://localhost:3001/${page.cathegoryName}?_page=${page.number}&_limit=${page.limit}`;
    console.log("data fetch... ");

    fetch(dataUrl, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          setPage({
            ...page,
            ...{ total: parseInt(response.headers.get("X-Total-Count")) }
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

  const handlePage = event => {
    if (page.number !== event.target.id) {
      console.log("page select");
      setPage({ ...page, ...{ number: parseInt(event.target.id) } });
    } else {
      return null;
    }
  };

  // download data to display in the list
  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line
  }, [page.cathegoryName, page.number]);

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
    <>
      <ul>{list}</ul>
      <div className={classes.whoWeHelp__pagination_buttons}>{buttons}</div>
    </>
  );
};

export default WhoWeHelpList;
