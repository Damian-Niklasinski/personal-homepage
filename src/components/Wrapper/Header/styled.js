import styled from "styled-components";


export const StyledHeader = styled.header`
    max-width: 1216px;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 72px;
`;

export const StyledImage = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    grid-area: 1 / 1 / last-line /1;
`;

export const HeaderItems = styled.div``;

export const FirstItem = styled.p`
    font-size: 12px;
    color: ${({theme}) => theme.color.slategray};
    font-weight: 700;
`;

export const SecondItem = styled.h1`
    font-size: 38px;
    color: ${({theme}) => theme.color.mineshaft};
    font-weight: 900;
    line-height: 46px;
    margin-top: 12px;
`;

export const ThirdItem = styled.p`
    font-size: 20px;
    color: ${({theme}) => theme.color.slategray};
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 5%;
    margin-top: 35px;
`;

export const HireMeButton = styled.a`
    cursor: pointer;
    width: 154px;
    height: 49px;
    margin-top: 32px;
    background-color: ${({theme}) => theme.color.scienceblue};
    color: ${({theme}) => theme.color.white};
    border: 1px solid #D1D5DA4D;
    border-radius: 4px;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
`;

export const HireImage = styled.img`
`;

export const HireText = styled.p`
    font-weight: 600;
`;