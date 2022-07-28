import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";

const flexConfig = css`
  display: flex;  
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  ${flexConfig}
  position: relative;
  margin: 0px auto;
  padding: 0px;
  height: auto;
  width: 95vw; 

  .up,
  .middle,
  .down {
    ${flexConfig}    
  }

  .down {
    margin-bottom: 10vh;
  }
`;

export const Image = styled.img`
  display: none;
  width: auto;
  height: 120px;
  margin-left: 1rem; 
  margin-top: 2rem;  
  /* z-index: -1; */
  @media (min-width: ${theme.breakpoints.tabletX1}) { 
    display: block;    
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {    
  } 
`;


export const ImageSmall = styled.img`
  display: inline-block;  
  width: auto;
  height: 50px;
  margin: 0rem;
  margin-top: 2rem;  
  z-index: -1;
  @media (min-width: ${theme.breakpoints.tabletX1}) {     
    display: none;
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {
    
  }
 
`;