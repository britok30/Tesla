import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import MainPage from "./components/MainPage"
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/vehicles" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
