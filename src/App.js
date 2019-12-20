import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";

import "./App.scss";

const App = () => {
  // const [user, setUser] = useState({
  //   userId: null,
  //   userName: null,
  //   userEmail: null
  // });

  // const setSession =(user) => {
  //   setUser(user)
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={Logout} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
