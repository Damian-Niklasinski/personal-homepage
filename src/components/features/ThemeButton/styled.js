import styled from "styled-components";

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 65px;
`;

export const StyledButtonText = styled.span`
  color: ${({theme}) => theme.color.slategray};
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;
`;

export const StyledThemeButton = styled.button`
  width: 48px;
  height: 26px;
  border: 1px solid #6E7E91;
  border-radius: 25px;
  background-color: ${({theme}) => theme.color.mercury};
`;