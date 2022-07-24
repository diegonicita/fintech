import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";

export const Wrapper = styled.div`
  width: 95vw;
  text-align: center;       
  position: fixed;
  bottom: 0;  
  left: 1vw;    
  background-color: var(--global-bg-color-soft-alpha); 

@media (min-width: ${theme.breakpoints.tabletX1}) {     
    width: 98vw;
    left: 1vw;  
    bottom: 1vh;
}
@media (min-width: ${theme.breakpoints.largeX1}) {  
    
}
`;

export const ProgressBar = styled.ul`
    padding: 0;  
    margin-top: 1rem;         
`;

export const Step = styled.li`
  list-style-type: none;
  float: left;
  width: ${(props) => props.totalSteps + "%"};
  position: relative;  
  font-size: 0.8rem;     
  &:before {
    content: " ";    
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;    
    border: 1px solid var(--global-border-color);;
    display: block;    
    margin: 0 auto 3px;
    background-color: var(--global-border-color);  
  }

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: var(--global-border-color);
    top: 3px;
    left: -50%;
    z-index: -2;
  }

  &:first-child:after {
    content: none;
  }

  &.active {
    color: var(--global-dark-color);
  }

  &.active:before {
    border-color: var(--global-dark-color);
    background-color: var(--global-dark-color);
  }

  &.active:after {
    background-color: var(--global-dark-color);
  }
`;
