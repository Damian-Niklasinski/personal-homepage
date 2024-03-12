import { StyledHeader, StyledImage, StyledTitle } from "./styled";
import gitIMG from "../../images/Shape.png"

const Portfolio = () => (
    <StyledHeader>
        <StyledImage src={gitIMG} alt="GitIMG"/>
        <StyledTitle>Portfolio</StyledTitle>
    </StyledHeader>
);

export default Portfolio;