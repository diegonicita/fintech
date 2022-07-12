
import styled, {css} from "styled-components";

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

@media (min-width: 600px) {
max-width: 350px;
}

`;

export const Button = styled.button`
  color: white;
  margin: 10px;
  font-size: 1rem;
  background-color: var(--global-primary-color);
  width: 130px;
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