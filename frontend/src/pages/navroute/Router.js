// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "../map/Map";
import Error from "../error/error";
import QuerAjudar from "../querajudar/querajudar";
import Fundacao from "../fundacao/fundacao";
import Presidente from "../presidente/presidente";
import Contactos from "../contactos/contactos";

import Navbar from "./navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/fundacao">
          <Fundacao></Fundacao>
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
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
