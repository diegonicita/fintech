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
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1rem;
`;

export const Button = styled.button`
  color: white;
  font-size: 1rem;
  background-color: var(--global-primary-color);
  width: 12rem;
  height: 3rem;
  border-radius: var(--global-border-radius);
  cursor: pointer;
  border: 1px solid var(--global-primary-color);
  :hover {
    color: var(--global-primary-color);
    background-color: var(--global-bg-color);
    border-color: var(--global-border-color);
  }
`;

export const Modal = styled.div`
    display: ${(props) => props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ModalMain = styled.section`
    ${flexConfig}
    position:fixed;
    background: white;
    width: 80%;
    max-width: 250px;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);      
    border-radius: 25px;
    padding: 15px;
  `;


