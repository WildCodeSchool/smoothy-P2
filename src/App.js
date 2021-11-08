import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import Product from "./Components/Product/Product.jsx";



const App = () => {

  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route 
            exact path="/ProductList/:product"
            component={ProductList } 
          />
          <Route 
            exact path="/Product/:product"
            component={Product}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
