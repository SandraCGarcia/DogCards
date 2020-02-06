import styled from 'styled-components';



export const CardContainer = styled.div`
    background-color: white;
    width: 400px;
    padding: 20px;
    margin: 30px auto;
    box-shadow: 0 4px 8px 3px #b0b0b0; 
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    
`;

export const CardHeaderPhoto = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 10px;
    border: 5px solid #2bc7b5; 
    background-image: url(${props => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CardHeaderTitle = styled.h1`
    font-size: 1.2rem;
    margin: 0;
    font-family: 'Sigmar One',cursive;
    color: #5f5f5f;
`;

export const CardHeaderDate = styled.h2`
    font-size: 0.8rem;
    margin: 0;
    font-weight: normal;
    color: #7c7c7c;
`;

export const CardMainText = styled.p`
    text-align: justify;
`;

export const CardFooter = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: space-between;
`;

export const More = styled.p`
    margin-left: 15px;
    font-size  : 0.9rem;
    color      : #b4b4b4;
`;

export const Likes = styled.p`
    margin-right: 15px;
    color       : #b4b4b4;
`;

export const Heart = styled.i`
    margin-left: 10px;
    color      : crimson;
`;