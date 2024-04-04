import styled, { css } from "styled-components";

export const StyledListItem = styled.li`
  border: 6px solid #d1d5da4d;
  padding: 56px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px #090a3308, 0px -2px 50px 0px #090a3305;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      background-color: ${({ theme }) => theme.color.mineshaft};
    `}

  &:hover {
    border: 6px solid #0366d633;

    ${({ $darkTheme }) =>
      $darkTheme &&
      css`
        border: 6px solid #d1d5da1a;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 42px;
  }
`;

export const StyledListHeader = styled.h3`
  color: ${({ theme }) => theme.color.scienceblue};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledListDescription = styled.p`
  color: ${({ theme }) => theme.color.slategray};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 24px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledListLink = styled.a`
  text-decoration: none;
  transition-duration: 500ms;
  color: ${({ theme }) => theme.color.dodgerblue};
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.dodgerblue};
      border-bottom: ${({ theme }) => theme.color.scienceblue};
    `}

  &:hover {
    color: ${({ theme }) => theme.color.scienceblue};
    border-bottom: 1px solid ${({ theme }) => theme.color.scienceblue};

    ${({ $darkTheme }) =>
      $darkTheme &&
      css`
        color: ${({ theme }) => theme.color.scienceBlue};
      `}
  }
`;
