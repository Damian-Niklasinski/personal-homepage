import styled, { css } from "styled-components";


export const StyledWrapper = styled.div`
    padding: 119px 14px 109px;
    font-family: 'Inter', sans-serif;
    word-break: break-word;
    background-color: ${({ theme }) => theme.color.liliac};
    transition-duration: 1s;

    ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.black};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 14px 14px 14px;
    }
`;