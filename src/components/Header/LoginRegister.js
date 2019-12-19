import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import {
  loginRegisterColor,
  threeColumnsBackground
} from "../../scss/settings/colors";

const useStyles = createUseStyles({
  // loginRegister: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignContent: "flex-end",
  //   width: "100%",
  //   marginBottom: "0.75rem"
  // },

  loginRegister__list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: "0.5rem",
    listStyle: "none"
  },

  loginRegister__list_item: {
    marginLeft: "2.5rem"
  },
  loginRegister__list_item_link: {
    color: `${loginRegisterColor}`,
    padding: "0.375rem 0.5rem",
    fontSize: "0.75rem",
    textDecoration: "none",

    "&:visited": {
      color: `${loginRegisterColor}`
    }
  },

  loginRegister__list_item_border: {
    border: `0.75px solid ${threeColumnsBackground}`
  }
});

const LoginRegister = props => {
  const classes = useStyles();
  // const content = props => {
  //   if (props.user.name !== null) {
  //     return (
  //       <>
  //         <li>{props.user.name}</li>
  //         <li>
  //           <Link to="/wylogowano">Wyloguj</Link>
  //         </li>{" "}
  //         }
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <li>
  //           <Link to="/logowanie" className={classes.loginRegister__list_item}>
  //             Zaloguj
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/rejestracja"
  //             className={
  //               classes.loginRegister__list_item +
  //               " " +
  //               classes.loginRegister__list_item_border
  //             }
  //           >
  //             Załóż konto
  //           </Link>
  //         </li>
  //       </>
  //     );
  //   }
  // };
  return (
    <ul className={classes.loginRegister__list}>
      <li className={classes.loginRegister__list_item}>
        <Link to="/logowanie" className={classes.loginRegister__list_item_link}>
          Zaloguj
        </Link>
      </li>
      <li className={classes.loginRegister__list_item}>
        <Link
          to="/rejestracja"
          className={
            classes.loginRegister__list_item_link +
            " " +
            classes.loginRegister__list_item_border
          }
        >
          Załóż konto
        </Link>
      </li>
    </ul>
  );
};

export default LoginRegister;
