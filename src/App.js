import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import Product from "./Components/Product/Product.jsx";
import NotFind from "./Components/Product/Product.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/notfind">
            <NotFind />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
