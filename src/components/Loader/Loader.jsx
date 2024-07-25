import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
    div{
    height:${props => props.height || "50px"};
    width: ${props => props.width || "50px"};
    border-radius:50%;
    border: 5px solid;
    border-color: ${props => props.loaderColor || "red"} ${props => props.bgColor || "white"} ${props => props.bgColor || "white"} ${props => props.bgColor || "white"};
    animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        0% {
        opacity: 1; 
        transform: rotate(0deg);
        scale:1; 
        }
        50% {
        opacity: 1;
        border-radius:0%;
        border: 3.3px solid;
        transform: rotate(180deg);
        scale:1.5; 
        border-color: ${props => props?.transitionColour?.loader || props?.loaderColor} ${props => props?.transitionColour?.background || props?.bgColor} ${props => props?.transitionColour?.background || props?.bgColor} ${props => props?.transitionColour?.background || props?.bgColor};
        }
        100% {
        opacity: 1; 
        border-radius:50%;
        transform: rotate(360deg); 
        scale:1;
        }
      }
    }
`

// Way to use the component
// <LoaderBody height="50px" width="50px" bgColor="black" loaderColor="red" transitionColour={{ loader: "white", background: "orange" }}>
//   <div></div>
// </LoaderBody>
// <LoaderBody height="100px" width="100px" bgColor="orange" loaderColor="white" transitionColour={{ loader: "red", background: "black" }}>
//   <div></div>
// </LoaderBody>