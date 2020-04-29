import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Button } from "./Button";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand px-sm-5">
                <Link to="/">
                    <img src={logo} alt="tesla" className="tesla" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Cars
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <Button>
                        <span className="px-5">
                            <i className="fas fa-cart-plus" />
                        </span>
                    </Button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;
