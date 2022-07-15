import styled, { css } from "styled-components";
import theme from "../../../globalBreakpoints";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;  
`;

export const Error = styled.div`
    color: var(--global-error-color);
    font-size: 1rem;
    padding-left: 2rem;
    `;

export const Input = styled.input`  
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  font-size: 1.2rem;    
  border: var(--global-border);
  background-repeat: no-repeat;
  background-size: 0.8rem;
  background-position: 4%;  
  box-sizing: border-box;  
  width: 100%;
  border: ${props => (props.borderError ? "var(--global-border-error)" : "var(--global-border)")};
`;

export const Select = styled.select`
  margin: 0 auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  font-size: 1.2rem;    
  width: 100%;  
  border: var(--global-border);
  background-repeat: no-repeat;
  background-size: 0.8rem;
  background-position: 4%;   
  box-sizing: border-box;
`;

export const Label = styled.label`
  box-sizing: border-box;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem; 
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
    margin-left: auto;
    `;

