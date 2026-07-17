import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProjectStatus } from "../../utils/projects";

type Props = {
    active: boolean;
}

type StatusProps = {
    status: ProjectStatus;
}

const statusColors: Record<ProjectStatus, string> = {
    live: '#1f9d55',
    testing: '#d97706',
    development: '#2563eb',
    github: '#6b7280',
};

export const Container = styled.div`
    width: 90%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 20px;
    border: 2px solid black;

    padding: 15px 2px;

    /* background-color: #44475a; */

    @media (max-width: 768px) {
        width: 90%;
        height: auto;

        flex-direction: column;

        margin-bottom: 20px;
        padding: 15px 2px;
    }
`;

export const ImageBox = styled.div`
    /* width: 200px;
    height: 350px; */

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: rgba(0,0,0,0);

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const IphoneImage = styled.img`
    width: 200px;
    height: 350px;

    border-radius: 20px;
`;

export const AppImage = styled.img`
    width: 155px;
    height: 325px;

    position: absolute;

    border-radius: 20px;
`;

export const PlainImage = styled.img`
    width: 240px;
    height: 156px;

    object-fit: cover;

    border-radius: 16px;
`;

export const StatusBadge = styled.span<StatusProps>`
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.03em;

    padding: 4px 10px;
    border-radius: 999px;

    margin-bottom: 10px;

    color: #fff;
    background-color: ${(props) => statusColors[props.status]};
`;

export const Title = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 10px;
    color: #000;
`;

export const Description = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 50px;

    /* padding: 0 10px; */

    @media (max-width: 768px) {
        margin: 0 30px;
        padding: 0;
    }
`;

export const Text = styled.text`
    font-size: 12px;
    text-align: justify;

    margin: 20px 0;

    color: #000;

    @media (max-width: 768px) {
        /* text-align: left; */
        margin: 10px 0;
    }
`;

export const TechList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;

    margin-top: 10px;
`;

export const TechTag = styled.span`
    font-size: 10px;

    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid #000;

    color: #000;
`;

export const LinksBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    margin-top: 20px;
`;

export const GithubLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    text-align: justify;
    text-decoration: underline;

    cursor: pointer;

    color: blue;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: left;
    }
`;

// export const InfoButton = styled(Link)`
export const InfoButton = styled.button`
    font-size: 12px;
    text-decoration: underline;
    border-width: 0;
    margin: 30px 0;
    cursor: pointer;
    color: blue;
    background-color: transparent;

    @media (max-width: 768px) {
        font-size: 14px;

        margin: 20px 0;
    }
`;
