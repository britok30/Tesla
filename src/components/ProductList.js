import React, { Fragment, Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="products">
                    <div className="container">
                        <Title title="Vehicles + Products" />

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
