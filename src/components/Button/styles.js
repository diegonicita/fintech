import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";

export const Button = styled.button`
color: white;  
background-color: var(--global-primary-color);
font-size: 1.3rem;
width: 12rem;
height: 3.5rem;
border-radius: var(--global-border-radius);
cursor: pointer;
border: 1px solid var(--global-primary-color);
:hover {
  color: white;
  background-color: var(--global-secundary-color);
  border-color: var(--global-border-color);
}  
@media (min-width: ${theme.breakpoints.tabletX1}) { 
  
}
@media (min-width: ${theme.breakpoints.largeX1}) {  
  
}
@media (max-width: ${theme.breakpoints.phoneX1}) {
  
}
@media (max-height: 300px) { 
  margin: 0 auto;    
}`;