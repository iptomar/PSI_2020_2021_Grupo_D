// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
//import Home from "../map/Map";
import Home from "../landingpage/LandingPage";
import Error from "../error/error";
import QuerAjudar from "../querajudar/querajudar";
import Mapa from "../map/Map";
import Presidente from "../presidente/presidente";
import Contactos from "../contactos/contactos";
import Login from "../login/Login";

import Navbar from "./navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/mapa">
          <Mapa></Mapa>
        </Route>
        <Route exact path="/querajudar">
          <QuerAjudar></QuerAjudar>
        </Route>
        <Route exact path="/presidente">
          <Presidente></Presidente>
        </Route>
        <Route exact path="/contactos">
          <Contactos></Contactos>
        </Route>
        <Route exact path="/backoffice/login">
          <Login />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
