import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 1216px;
    margin: auto;
    text-align: center;
`;

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    color: ${({theme}) => theme.color.scienceblue};
`;

export const StyledTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
`;