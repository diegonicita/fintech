import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";

export const Form = styled.form`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2 {
    white-space: pre-line;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.tabletX1}) {
    margin-top: 55px;
  }
  @media (max-width: ${theme.breakpoints.phoneX1}) {
  }
`;

export const Botonera = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0rem;
  @media (min-width: ${theme.breakpoints.tabletX1}) {
    flex-direction: row;
    margin-top: 0.5rem;
    justify-content: space-between;
  }
  @media (max-width: ${theme.breakpoints.phoneX1}) {
  }
`;