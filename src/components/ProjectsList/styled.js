import styled from "styled-components";

export const StyledProjectList = styled.ul`
    list-style: none;
    max-width: 1216px;
    margin: auto;
    margin-top: 24px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const StyledProjectListItem = styled.li`
    border: 6px solid #D1D5DA4D;
    padding: 56px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 
     0px 16px 58px 0px #090A3308,
     0px -2px 50px 0px #090A3305;

    &:hover {
        border: 6px solid #0366D633
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
        padding: 42px;
    }
`;

export const StyledProjectTitle = styled.h3`
    color: ${({ theme }) => theme.color.scienceblue};
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
`;

export const StyledProjectDescription = styled.p`
    color: ${({ theme }) => theme.color.slategray};
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 24px;
`;
