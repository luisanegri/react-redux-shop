import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProductsContainer from "./components/ProductsContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ProductsContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
