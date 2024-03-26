import {
  StyledErrorButton,
  StyledErrorHeader,
  StyledErrorIcon,
  StyledErrorParagraph,
  StyledErrorWrapper,
} from "./styled";
import DangerIcon from "../../../images/Danger.svg";

const ErrorStage = ({ darkTheme }) => (
  <StyledErrorWrapper>
    <StyledErrorIcon src={DangerIcon} alt="Danger" $darkTheme={darkTheme} />
    <StyledErrorHeader $darkTheme={darkTheme}>
      Ooops! Something went wrong...
    </StyledErrorHeader>
    <StyledErrorParagraph $darkTheme={darkTheme}>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </StyledErrorParagraph>
    <StyledErrorButton $darkTheme={darkTheme}>Go to Github</StyledErrorButton>
  </StyledErrorWrapper>
);

export default ErrorStage;
