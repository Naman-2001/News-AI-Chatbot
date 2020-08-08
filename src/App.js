import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Country from "./components/Country.js/Country";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [country, setCountry] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Country country={country} onChangeCountry={setCountry} />
          )}
        />
        <Route path="/home" render={() => <Home country={country} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
