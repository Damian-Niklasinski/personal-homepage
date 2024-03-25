import { StyledButtonsContainer, StyledCaption, StyledContainer, StyledFooter, StyledGithubIcon, StyledLink, StyledLinkedinIcon, StyledParagraph } from "./styled";

const Footer = ({ darkTheme }) => (
    <StyledFooter>
        <StyledContainer>
            <StyledCaption $darkTheme={darkTheme}>Let’s talk!</StyledCaption>
            <StyledLink
                href="mailto: damianiklasinski@gmail.com"
                $darkTheme={darkTheme}
            >
                damianiklasinski@gmail.com
            </StyledLink>
            <StyledParagraph $darkTheme={darkTheme}>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me</StyledParagraph>
        </StyledContainer>
        <StyledButtonsContainer>
            <a href="https://github.com/Damian-Niklasinski">
                <StyledGithubIcon $darkTheme={darkTheme} />
            </a>
            <a href="https://www.linkedin.com/in/damian-niklasi%C5%84ski-1998b32b9/">
                <StyledLinkedinIcon $darkTheme={darkTheme} />
            </a>
        </StyledButtonsContainer>
    </StyledFooter>
);

export default Footer;