import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <Card key={id} className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-text">{title}</h3>
                    <p className="card-text">Price: ${price}</p>
                </div>
            </Card>
        );
    }
}

const Card = styled.div`
    background: #333333;
    border-radius: 3px;
    margin: 3rem;
    width: 50rem;
    transition: all 2s ease;

    h3 {
        font-size: 3rem;
    }

    &:hover {
        transform: scale(1.02);
    }
`;

export default Product;
