import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductsContainer from './components/ProductsContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={ProductsContainer}></Route>
        <Route path="/product/:id" component={ProductDetailContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
