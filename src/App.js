import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import Product from "./Components/Product/Product.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import OpenPage from "./Components/OpenPage/OpenPage.jsx";
import BarCode from "./Components/BarCode/BarCode.jsx";
import Searchproduct from "./Components/Product/SearchProduct.jsx";
import ProductListEquiv from "./Components/ProductList/ProductList_Equiv.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />

          </Route> 
          <Route exact path="/openpage">
            <OpenPage />

          </Route>
          <Route exact path="/barcode">
            <BarCode />

          </Route>
            <Route 
            exact path="/productList/:product"
            component={ProductList} 
          /> 
          <Route 
            exact path="/product/:product"
            component={Product}
          />
          <Route 
            exact path="/productListEquiv/:healthy"
            component={ProductListEquiv}
          />
          
          <Route 
            exact path="/product/:product"
            component={Searchproduct}
          />
            <Route path="/error">
            <NotFound />
          </Route>

          <Route 
            exact path="*"
            component={NotFound}
          />


        </Switch>
      </Router>
    </>
  );
};

export default App;
