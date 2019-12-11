import React from "react";

import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";

const HomeHeader = props => {
  return (
    <header id="start">
      <div className="header__image"></div>
      <div className="header__content">
        <div className="header__content--top-menu">
          <LoginRegister userName={props.userName} />
          <Navigation />
        </div>
        <div className="header__content--content">
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          <div className="header__content--decoration"></div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
