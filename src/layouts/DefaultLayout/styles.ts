import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    margin: 2%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
