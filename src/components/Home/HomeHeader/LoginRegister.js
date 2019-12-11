import React from "react";
import { Link } from "react-router-dom";

const LoginRegister = props => {
  return (
    <div className="header__login-register">
      <ul>
        <li>{props.userName}</li>
        <li>
          <Link to="/logowanie">Zaloguj</Link>
        </li>
        <li>
          <Link to="/rejestracja">Załóż konto</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginRegister;
