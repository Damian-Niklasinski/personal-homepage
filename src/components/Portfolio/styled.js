import styled, { css } from "styled-components";
import { ReactComponent as GithubIcon } from "../../images/Fill-51.svg"

export const StyledHeader = styled.header`
    max-width: 1216px;
    margin: auto;
    text-align: center;
    margin-top: 72px;
`;

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
`;

export const StyledTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin-top: 12px;
    margin-bottom: 0px;

    ${({ $darkTheme }) => $darkTheme && css`
        color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledSubTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 8px;

    ${({ $darkTheme }) => $darkTheme && css`
        color: ${({ theme }) => theme.color.white}
    `}
`;
