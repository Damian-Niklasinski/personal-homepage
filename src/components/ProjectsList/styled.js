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


