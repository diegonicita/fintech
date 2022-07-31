import styled, { css } from "styled-components";
import theme from "../../../globalBreakpoints";
import {Link} from "react-router-dom";

const commonPadding = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

const commonStyles = css`
  ${commonPadding};
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  ${commonStyles};
  border: ${(props) =>
    props.borderError ? "var(--global-border-error)" : "var(--global-border)"};
`;

export const Select = styled.select`
  ${commonStyles};
  border: ${(props) =>
    props.borderError ? "var(--global-border-error)" : "var(--global-border)"};
`;

export const Label = styled.label`
  ${commonPadding};
  box-sizing: border-box;
  font-size: 1.2rem;
  width: 300px;
  @media (min-width: ${theme.breakpoints.phoneX1}) {
    width: 320px;
  }
  @media (min-width: ${theme.breakpoints.tabletX1}) {
    width: 400px;
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

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const CheckBox = styled.input`
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 3.5rem;
  width: 20px;
  height: 20px;
  border: 1px solid var(--global-border);
  border-radius: 5px;
  background-color: var(--global-background-color);
  &:checked {
    background-color: var(--global-primary-color);
  }
`;

export const Terminos = styled.div`
  width: 100%;
  font-size: 0.8rem;
  color: var(--global-text-color);
  &:hover {
    cursor: pointer;
  }
`;

export const MoreInformation = styled.div`
  margin-left: 2rem;
  font-size: 0.8rem;
  color: gray;
  font-weight: 800;
`;

export const Enlace = styled(Link)`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: #1488E9;
  font-weight: 800;
`;
