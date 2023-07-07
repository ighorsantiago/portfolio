import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 4.5rem);

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: green; */
`;

export const Content = styled.div`
    width: 50%;
    height: 50%;
`;

export const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.text`
    font-size: 40px;

    text-align: center;

    /* margin-bottom: 50px; */

    color: #000;
`;

export const Text = styled.text`
    font-size: 16px;
    color: #000;
`;

export const Button = styled.button`
    width: 130px;
    height: 30px;

    border: 1px solid #000;

    color: #000;
    background-color: transparent;
`;

export const ImageBox = styled.div`
    width: 50%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: red; */
`;

export const Image = styled.img`
    width: 400px;
    height: 400px;
`;

// export const Container = styled.div`
//     width: 90%;
//     height: calc(100vh - 6rem);

//     display: flex;

//     justify-content: center;
//     align-items: center;

//     @media (max-width: 768px) {
//         padding: 20px 0;
//     }
// `;


// export const Content = styled.div`
//     /* width: 100%;
//     height: calc(100vh - 8rem); */
    
//     width: 80%;
    
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//     border-radius: 20px;

//     padding: 15px;
    
//     background-color: #44475a;

//     @media (max-width: 768px) {
//         width: 100%;

//         margin-top: 20%;
//     }
// `;

// export const Text = styled.text`
//     font-size: 20px;
// `;
