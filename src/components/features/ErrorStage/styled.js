import styled, { css } from "styled-components";

export const StyledErrorWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  text-align: center;
  margin-top: 95px;
`;

export const StyledErrorIcon = styled.img`
  width: 48px;
  height: 48px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledErrorHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.mineshaft};
  margin-top: 16px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledErrorParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.mineshaft};
  margin-top: 32px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const StyledErrorButton = styled.button`
  background-color: ${({ theme }) => theme.color.scienceblue};
  color: ${({ theme }) => theme.color.white};
  padding: 12px 16px 12px 16px;
  border: 1px solid #d1d5da1a;
  border-radius: 4px;
  margin-top: 32px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      background-color: ${({ theme }) => theme.color.dodgerblue};
    `}
`;
