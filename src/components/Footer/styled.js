import styled, { css } from "styled-components";
import { ReactComponent as GithubIcon } from "../../images/Fill-51.svg"
import { ReactComponent as LinkedinIcon } from "../../images/LinkedIN_black.svg"

export const StyledFooter = styled.footer`
    max-width: 1216px;
    margin: 120px auto 109px;
`;

export const StyledContainer = styled.div`
    max-width: 670px;
`;

export const StyledCaption = styled.caption`
    display: flex;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.slategray};
    margin-bottom: 24px;
`;

export const StyledLink = styled.a`
    font-size: 32px;
    font-weight: 900;
    line-height: 39px;
    color: ${({ theme }) => theme.color.mineshaft};
    text-decoration: none;
    transition-duration: 250ms;
`;

export const StyledParagraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.mineshaft};
    line-height: 26px;
    margin-top: 24px;
`;

export const StyledButtonsContainer = styled.div`
    max-width: 264px;
    margin-top: 56px;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 26px;
`;

const LinkStyle = () => {
    return css`
    & path {
        transition-duration: 200ms;
        fill: ${({theme}) => theme.color.black};
    }
    &:hover path {
        fill: ${({theme}) => theme.color.scienceblue};
    }
    `;
}

export const StyledGithubIcon = styled(GithubIcon)`
    ${(props) => LinkStyle(props)};
`;

export const StyledLinkedinIcon = styled(LinkedinIcon)`
    ${(props) => LinkStyle(props)};
`;