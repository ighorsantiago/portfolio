import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;

    padding: 2rem 0;

    border-width: 1px;
`;

export const Button = styled(Link)`
    font-size: 28px;
    font-weight: bold;
    
    border-width: 0;
    margin-left: 30px;

    color: #fff;
    background-color: transparent;
`;
