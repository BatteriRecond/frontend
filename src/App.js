import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/Main";
import ContactPage from "./pages/Contact";
import ProductsPage from "./pages/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
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
