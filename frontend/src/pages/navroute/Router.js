import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
//import Home from "../map/Map";
import Home from "../landingpage/LandingPage";
import Error from "../error/error";
import Mapa from "../map/Map";
import Contactos from "../contactos/contactos";
import Login from "../login/Login";
import Dashboard from "../backoffice/dashboard/Dashboard";
import Navbar from "./navbar";
import AuthContext from "../../configs/authContext";

const ReactRouterSetup = () => {
  const auth = useContext(AuthContext);
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
        <Route exact path="/contactos">
          <Contactos></Contactos>
        </Route>
        <Route exact path="/backoffice/login">
          <Login />
        </Route>
        <Route exact path="/backoffice/dashboard">
          {auth.user ? (
            <Dashboard />
          ) : (
            <Error code={401} msg={"Unauthorized"} />
          )}
        </Route>
        <Route path="*">
          <Error code={404} msg={"Page not found"} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
