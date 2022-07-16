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
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;

  .up,
  .middle,
  .down {
    ${flexConfig}    
  }

  @media (min-height: 480px) { 
    
  } 
`;

export const Image = styled.img`
  display: none;
  width: auto;
  height: 150px;
  margin: 2rem; 
  @media (min-width: ${theme.breakpoints.tabletX1}) { 
    display: block;    
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {    
  } 
`;


export const ImageSmall = styled.img`
  display: block;  
  width: auto;
  height: 50px;
  margin: 2rem;
  margin-top: 4rem;  
  @media (min-width: ${theme.breakpoints.tabletX1}) {     
    display: none;
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {
    
  }
 
`;