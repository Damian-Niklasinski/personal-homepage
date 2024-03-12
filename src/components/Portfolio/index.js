import { StyledHeader, StyledImage, StyledSubTitle, StyledTitle } from "./styled";
import gitIMG from "../../images/Shape.png"

const Portfolio = () => (
    <StyledHeader>
        <StyledImage src={gitIMG} alt="GitIMG"/>
        <StyledTitle>Portfolio</StyledTitle>
        <StyledSubTitle>My recent projects</StyledSubTitle>
    </StyledHeader>
);

export default Portfolio;