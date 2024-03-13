import styled from "styled-components";


export const StyledWrapper = styled.div`
    padding: 119px 14px 109px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
        padding: 14px 14px 14px;
    }
`;