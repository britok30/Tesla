import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <div>
            <div className="container-fluid main-tesla">
                <Navbar />
                <header>
                    <LeadHeading>Tesla</LeadHeading>
                    <LeadButton className="btn btn-outline-light">
                        <Link
                            to="/vehicles"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "1.2rem",
                            }}
                        >
                            Custom Order
                        </Link>
                    </LeadButton>
                </header>
            </div>
        </div>
    );
}

const LeadHeading = styled.h1`
    font-size: 4rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: 10px;
    margin-top: 10rem;
`;

const LeadButton = styled.button`
    padding: 0.5rem;
    border-radius: 3px;
    display: block;
    margin: 1rem auto;
`;
