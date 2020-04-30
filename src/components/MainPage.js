import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function MainPage() {
    return (
        <div>
            <div className="container-fluid main-tesla">
                <Navbar />
                <header>
                    <LeadHeading>Tesla</LeadHeading>
                </header>
            </div>
        </div>
    );
}

const LeadHeading = styled.h1`
    font-size: 4rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: 20px;
    margin-top: 10rem;
`;
