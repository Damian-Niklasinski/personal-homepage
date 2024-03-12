import myImage from "../../../images/zdjątko2.jpg"
import mailIcon from "../../../images/Message.png"
import { FirstItem, HeaderItems, HireImage, HireMeButton, HireText, SecondItem, StyledHeader, StyledImage, ThirdItem } from "./styled";

const Header = ({ HeaderContent }) => (
    <StyledHeader>
        <StyledImage src={myImage} alt="My picture" />
        <HeaderItems>
            <div>
                {HeaderContent}
            </div>
            <FirstItem>THIS IS</FirstItem>
            <SecondItem>Damian Niklasiński</SecondItem>
            <ThirdItem>👨🏻‍💻 I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.</ThirdItem>
            <HireMeButton href="mailto: damianiklasinski@gmail.com" title="damianiklasinski@gmail.com">
                <HireImage src={mailIcon} alt="MailIcon" />
                <HireText>Hire Me</HireText>
            </HireMeButton>
        </HeaderItems>
    </StyledHeader>
);

export default Header;