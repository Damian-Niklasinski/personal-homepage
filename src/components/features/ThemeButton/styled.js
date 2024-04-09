import styled, { css } from "styled-components";

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 65px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: center;
  }
`;

export const StyledButtonText = styled.span`
  color: ${({ theme }) => theme.color.slategray};
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledThemeButton = styled.button`
  width: 55px;
  height: 26px;
  border: 1px solid #6e7e91;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.mercury};
  transition-duration: 1000ms;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      background-color: ${({ theme }) => theme.color.mineshaft};
    `}
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.slategray};
  transition-duration: 500ms;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      transform: translateX(100%);
      background-color: ${({ theme }) => theme.color.scorpion};
    `}
`;

export const StyledSunIcon = styled.img`
  align-self: center;
`;
