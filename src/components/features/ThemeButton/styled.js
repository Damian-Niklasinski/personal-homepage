import styled, { css } from "styled-components";

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 65px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: none;
    }
`;

export const StyledButtonText = styled.span`
  color: ${({ theme }) => theme.color.slategray};
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const StyledThemeButton = styled.button`
  width: 55px;
  height: 26px;
  border: 1px solid #6E7E91;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.mercury};
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.slategray};
  transition-duration: 250ms;

  ${({ $darkTheme }) => $darkTheme && css`
    transform: translateX(100%);
  `}
`;

export const StyledSunIcon = styled.img`
  align-self: center;
`;