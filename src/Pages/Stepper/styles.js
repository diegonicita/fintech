import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";
import { Link } from "react-router-dom";

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

  .up {
    ${flexConfig} 
    justify-content: flex-end;
    align-items: flex-start;
  };

  .middle,
  .down {
    ${flexConfig}    
  }

  .down {
    margin-bottom: 10vh;
  }
`;

export const ImageContainer = styled(Link)`	
  display: flex;
  align-self: flex-start;
  position: absolute;
`;          

export const Image = styled.img`
  justify-content: flex-start;
  align-self: flex-end;
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