import styled, { css } from "styled-components";
import theme from "../../../globalBreakpoints";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;    
`;

export const Error = styled.div`
  color: var(--global-error-color);
  font-size: 0.8rem;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  align-self: flex-start;
`;

const commonPadding = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
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
  width: 400px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;
