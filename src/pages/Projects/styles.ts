import styled from "styled-components";

type FilterButtonProps = {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 6rem);

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: center;

    padding: 5%;

    /* background-color: green; */

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Text = styled.text`
    font-size: 32px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;

    margin-bottom: 30px;

    color: var(--color-text);

    @media (max-width: 768px) {
        font-size: 26px;
        text-align: center;
    }
`;

export const FilterBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;

    margin-bottom: 40px;

    @media (max-width: 768px) {
        gap: 8px;
        padding: 0 20px;
    }
`;

export const FilterButton = styled.button<FilterButtonProps>`
    font-family: 'Fira Code', monospace;
    font-size: 14px;

    padding: 8px 16px;
    border-radius: 999px;
    border: 1px solid ${(props) => (props.active ? 'var(--color-text)' : 'var(--color-border)')};

    cursor: pointer;

    color: ${(props) => (props.active ? '#0a0a0a' : 'var(--color-text)')};
    background-color: ${(props) => (props.active ? 'var(--color-text)' : 'transparent')};

    transition: background-color 0.15s, color 0.15s;

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;


export const Content = styled.div`
    // display: flex;

    // border-radius: 20px;

    /* background-color: #44475a; */

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Table = styled.ul`
    /* width: 100%; */

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: stretch;

    /* background-color: #44475a; */

    @media (max-width: 768px) {
        display: block;
        flex-wrap: none;
    }
`;

export const Line = styled.li`
    width: 50%;
    decoration: none;
    list-style-type: none;

    margin-bottom: 30px;

    @media (max-width: 768px) {
        width: 100%;

        margin: 0 25px;
    }
`;
