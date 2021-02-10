import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import MainPage from './pages/main.js';
import ContactPage from './pages/contact.js';
import ProductsPage from './pages/products.js';



function App() {
  return (
    <Router>
    <Switch>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/products">
            <ProductsPage/>
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="*"> 
            <Redirect to="/" />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
