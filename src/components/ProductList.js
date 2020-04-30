import React, { Fragment, Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { teslaProducts } from "../data";

class ProductList extends Component {
    state = {
        products: teslaProducts,
    };
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="Vehicles" />

                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        );
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductList;
