import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './Components/Navbar/NavComponents/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Barcode from "./Components/Navbar/NavComponents/Barcode";
import SearchFunc from "./Components/Search/SearchFunc";
const App = () => {
  return (

    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path='/barcode'>
        <Barcode/>
        </Route>
        </Switch>
        </div>

    </Router>
    
  );
}

export default App;
