import React, { Fragment, Component } from "react";
import Product from "./Product";
import Title from "./Title"
import {teslaVehicles} from "../data"

class ProductList extends Component {
    state= {
        products: teslaVehicles
    }
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                        <Title title="Vehicles" />
                        </div>
                    </div>
                </div>
                <Product />
            </Fragment>
        );
    }
}

export default ProductList;
