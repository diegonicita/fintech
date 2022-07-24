import styled from "styled-components";
import theme from "../../globalBreakpoints";

export const Container = styled.div`
margin-top: 0px;
margin-left: 2rem;
max-width: 400px;
@media (min-width: ${theme.breakpoints.tabletX1}) {
margin-top: 0px;
  }
`;

export const Title = styled.h2`
`;

export const Wrapper = styled.div`
display: flex;
`;

export const TitleLabel = styled.h3`
 margin: 5px;
`;

export const Input = styled.input`
.error {    
    border: ${ (props) => props.error ? "1px solid var(--global-error-color)" : ""}
}
`;

export const Label = styled.label`
`;

export const ErrorMsg = styled.div`
    color: var(--global-error-color);
    font-size: 1rem;  
    padding-left: 2rem; 
    margin: 0.5rem 0;
  `;