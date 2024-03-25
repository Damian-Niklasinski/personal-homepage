import { StyledHeader, StyledImage, StyledSubTitle, StyledTitle } from "./styled";
import gitIMG from "../../images/Shape.png"

const Portfolio = ({ darkTheme }) => (
    <StyledHeader $darkTheme={darkTheme}>
        <StyledImage src={gitIMG} alt="GitIMG" />
        <StyledTitle $darkTheme={darkTheme}>Portfolio</StyledTitle>
        <StyledSubTitle $darkTheme={darkTheme}>My recent projects</StyledSubTitle>
    </StyledHeader>
);

export default Portfolio;