import styled, { css, keyframes } from "styled-components";

const spinning = keyframes`
    to{transform: rotate(1turn)}
`;

export const StyledWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  margin-top: 88px;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.mineshaft};

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledLoadingIcon = styled.img`
  width: 100px;
  height: 100px;
  animation: ${spinning} 1s infinite linear;
  margin-top: 48px;
`;
