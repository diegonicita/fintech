
import styled, {css} from "styled-components";
import theme from "../../globalBreakpoints";

const flexConfig = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
justify-content: space-around;
position:fixed;
background: white;
width: 80%;
max-width: 250px;
min-height: 23rem;
top:43%;
left:50%;
transform: translate(-50%,-50%);      
border-radius: 25px;
padding: 15px;

@media (min-width: 600px) {
max-width: 350px;
}

`;

export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
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
  @media (min-width: ${theme.breakpoints.tabletX1}) { 
    font-size: 1.3rem;
        width: 15rem;
        height: 4rem; 
  }
  @media (min-width: ${theme.breakpoints.largeX1}) {  
    font-size: 1.3rem;
        width: 15rem;
        height: 4rem;  
  }
  @media (max-width: ${theme.breakpoints.phoneX1}) {
    font-size: 1rem;    
    width: 85vw;
    height: 4rem;
  }
`;