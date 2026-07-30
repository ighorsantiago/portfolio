import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    padding-top: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    width: 50%;
    height: 50%;

    @media (max-width: 640px) {
        width: 50%;
        height: 30%;
    }
`;

export const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        justify-content: center;
    }
`;

export const Title = styled.text`
    font-size: 40px;

    text-align: center;

    margin-bottom: 30px;

    color: var(--color-text);

    @media (max-width: 640px) {
        min-width: 360px;
        font-size: 30px;
    }
`;

export const Text = styled.text`
    font-size: 16px;
    color: var(--color-text-secondary);

    @media (max-width: 640px) {
        margin: 20px 0;
    }
`;

export const LearningBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;

    @media (max-width: 640px) {
        margin-top: 20px;
    }
`;

export const LearningTitle = styled.text`
    font-size: 14px;
    font-weight: bold;

    margin-bottom: 12px;

    color: var(--color-text);
`;

export const ChipList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    max-width: 400px;
`;

export const Chip = styled.span`
    font-size: 12px;

    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid var(--color-badge-border);
    background-color: var(--color-badge-bg);

    color: var(--color-badge-text);
`;

export const Button = styled.button`
    width: 140px;
    height: 30px;

    border: 1px solid var(--color-border);

    padding: 5px 0;

    color: var(--color-text);
    background-color: transparent;
`;

export const BadgesBox = styled.div`
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        width: 90%;
        margin-top: 50px;
    }
`;

export const BadgeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    max-width: 380px;
`;

export const TechBadge = styled.span`
    font-size: 13px;

    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--color-badge-border);
    background-color: var(--color-badge-bg);

    color: var(--color-badge-text);
`;
