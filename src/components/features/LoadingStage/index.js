import { StyledLoadingIcon, StyledParagraph, StyledWrapper } from "./styled";
import LoadingIcon from "../../../images/icon-spinner.png";

const LoadingStage = ({ darkTheme }) => (
  <StyledWrapper>
    <StyledParagraph $darkTheme={darkTheme}>
      Please wait, projects are being loaded...
    </StyledParagraph>
    <StyledLoadingIcon src={LoadingIcon} alt="Loading" />
  </StyledWrapper>
);

export default LoadingStage;
