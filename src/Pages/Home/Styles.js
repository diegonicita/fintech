import styled, { css } from "styled-components";

const flexConfig = css`
  display: flex;
  justify-content: center;
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

  .up {height: 20vh;}
  .middle {height: 10vh;}
  .down {height: 30vh;}
`;

export const Image = styled.img`
  width: auto;
  height: 15vh;
  margin-bottom: 50px;
  @media (min-width: 600px) { 
    height: 20vh;
  } 
  @media (max-width: 200px) {
    width: 90vw;
    height: auto;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
@media (min-width: 600px) {
    font-size: 1.5rem;
}
@media (min-width: 900px) {
    font-size: 1.5rem;
}
@media (max-width: 200px) {
    font-size: 1.5rem;    
    width: 80vw;
  }
`;

export const Button = styled.button`
  color: white;  
  background-color: var(--global-primary-color);
  font-size: 1.3rem;
  width: 15rem;
  height: 4rem;
  border-radius: var(--global-border-radius);
  cursor: pointer;
  border: 1px solid var(--global-primary-color);
  :hover {
    color: var(--global-primary-color);
    background-color: var(--global-bg-color);
    border-color: var(--global-border-color);
  }  
  @media (min-width: 600px) { 
    font-size: 1.3rem;
        width: 15rem;
        height: 4rem; 
  }
  @media (min-width: 900px) {  
    font-size: 1.3rem;
        width: 15rem;
        height: 4rem;  
  }
  @media (max-width: 300px) {
    font-size: 1rem;    
    width: 60vw;
    height: 4rem;
  }
`;


