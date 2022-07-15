import styled, { css } from "styled-components";
import theme from "../../globalBreakpoints";

const flexConfig = css`
  display: flex;  
  align-items: center;
  flex-direction: column;
`;

export const HomeContainer = styled.div`
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

  .up {}
  .middle {}
  .down {}

  @media (min-height: 480px) { 
    justify-content: center;    
  } 
`;

export const Image = styled.img`
  display: none;
  width: 150px;
  margin: 3rem; 
  @media (min-width: ${theme.breakpoints.tabletX1}) { 
    display: block;    
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {    
  }
  @media (max-height: 300px) { 
    margin: 0 auto;    
  } 
`;

export const ImageSmall = styled.img`
  display: block;  
  width: 50px;
  margin: 3rem;
  margin-top: 6rem;  
  @media (min-width: ${theme.breakpoints.tabletX1}) {     
    display: none;
  } 
  @media (max-width: ${theme.breakpoints.phoneX1}) {
    
  }
  @media (max-height: 300px) { 
    margin: 3rem;    
    margin-top: 2rem;
  } 
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem;
  max-width: 10rem;
@media (min-width: ${theme.breakpoints.tabletX1}) {    
}
@media (min-width: ${theme.breakpoints.largeX1}) {    
}
@media (max-width: ${theme.breakpoints.phoneX1}) {   
    width: 80vw;
  }
  @media (max-height: 300px) { 
    margin: 0 auto;    
  } 
`;



