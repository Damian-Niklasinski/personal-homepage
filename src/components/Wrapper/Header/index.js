import myImage from "../../../images/ZDJECIE.jpg";
import mailIcon from "../../../images/Message.png";
import {
  FirstItem,
  HeaderItems,
  HireImage,
  HireMeButton,
  HireText,
  SecondItem,
  StyledHeader,
  StyledImage,
  ThirdItem,
} from "./styled";

const Header = ({ HeaderContent, darkTheme }) => (
  <StyledHeader>
    <StyledImage src={myImage} alt="My picture" />
    <HeaderItems>
      {HeaderContent}
      <FirstItem $darkTheme={darkTheme}>THIS IS</FirstItem>
      <SecondItem $darkTheme={darkTheme}>Damian Niklasiński</SecondItem>
      <ThirdItem $darkTheme={darkTheme}>
        👨🏻‍💻 I’m a passionate Frontend Developer in love with React,currently
        looking for new job opportunities.
      </ThirdItem>
      <HireMeButton
        href="mailto: damianiklasinski@gmail.com"
        title="damianiklasinski@gmail.com"
      >
        <HireImage src={mailIcon} alt="MailIcon" />
        <HireText>Hire Me</HireText>
      </HireMeButton>
    </HeaderItems>
  </StyledHeader>
);

export default Header;
