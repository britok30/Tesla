import styled from "styled-components";

export const Button = styled.button`
    background: var(--teslaRed);
    color: var(--teslaWhite);
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;

    &:hover {
        opacity: 1;
    }

    &:focus {
        outline: none;
    }
`;
