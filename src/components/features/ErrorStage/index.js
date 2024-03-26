import {
  StyledErrorButton,
  StyledErrorHeader,
  StyledErrorIcon,
  StyledErrorParagraph,
  StyledErrorWrapper,
} from "./styled";
import DangerIcon from "../../../images/Danger.png";

const ErrorStage = () => (
  <StyledErrorWrapper>
    <StyledErrorIcon src={DangerIcon} alt="Danger" />
    <StyledErrorHeader>Ooops! Something went wrong...</StyledErrorHeader>
    <StyledErrorParagraph>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </StyledErrorParagraph>
    <StyledErrorButton>Go to Github</StyledErrorButton>
  </StyledErrorWrapper>
);

export default ErrorStage;
