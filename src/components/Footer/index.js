import { StyledButtonsContainer, StyledCaption, StyledContainer, StyledFooter, StyledGithubIcon, StyledLink, StyledLinkedinIcon, StyledParagraph } from "./styled";

const Footer = () => (
    <StyledFooter>
        <StyledContainer>
            <StyledCaption>Let’s talk!</StyledCaption>
            <StyledLink href="mailto: damianiklasinski@gmail.com">damianiklasinski@gmail.com</StyledLink>
            <StyledParagraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me</StyledParagraph>
        </StyledContainer>
        <StyledButtonsContainer>
            <a href="https://github.com/Damian-Niklasinski">
                <StyledGithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/damian-niklasi%C5%84ski-1998b32b9/">
                <StyledLinkedinIcon />
            </a>
        </StyledButtonsContainer>
    </StyledFooter>
);

export default Footer;