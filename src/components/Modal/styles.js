
import styled from "styled-components";
// import theme from "../../globalBreakpoints";
import Button from "../Button/Button";

// const flexConfig = css`
//   display: flex;  
//   align-items: center;
//   flex-direction: column;
// `;

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
position: fixed;
margin: 0 auto;
background: white;
top:50%;
left:50%;
transform: translate(-50%,-50%);      
border-radius: 25px;
padding: 15px;
width: 15rem;

h3 {  
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  max-width: 180px;
  margin-top: 0px;
}

@media (min-width: 600px) {

}
`;

export const ButtonModal = styled(Button)`
font-size: "1rem";
width: 10rem;
height: 3rem;
`;
