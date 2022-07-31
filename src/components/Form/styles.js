import styled from "styled-components";
import theme from "../../globalBreakpoints";

export const Form = styled.form`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${theme.breakpoints.tabletX1}) {
    margin-top: 55px;
  }
  @media (max-width: ${theme.breakpoints.phoneX1}) {
  }
`;

export const Error = styled.div`
  color: var(--global-error-color);
  font-size: 0.8rem;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  align-self: flex-start;
`;
