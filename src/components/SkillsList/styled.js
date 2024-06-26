import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  max-width: 1216px;
  margin: auto;
  margin-top: 73px;
  box-shadow: 0px 16px 58px 0px #090a3308;
  box-shadow: 0px -2px 50px 0px #090a3305;
  border-radius: 4px;
  padding: 35px;
  transition-duration: 500ms;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      background-color: #363636b8;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 16px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 900;
  line-height: 37px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledList = styled.ul`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.iron};
  padding: 32px 0 0 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px 115px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledListItem = styled.li`
  &:before {
    content: "• ";
    color: ${({ theme }) => theme.color.scienceblue};

    ${({ $darkTheme }) =>
      $darkTheme &&
      css`
        color: ${({ theme }) => theme.color.dodgerblue};
      `}
  }
  color: ${({ theme }) => theme.color.slategray};
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 8px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
