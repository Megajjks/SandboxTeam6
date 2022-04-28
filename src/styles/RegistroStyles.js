import styled from "styled-components"

// /* Estilos del formulario base */
//  export const registroUsuario = styled {  
//     float: right;
//     width: 400px;
//     margin: 7em;
//     padding: 1em;
//     background-color: #FFF6FD;
//     border-radius: 0.5em;
//     font-size: normal;
//     background-position:200%;
//   };

 
//   /* Estilos de las etiquetas */
//   registroUsuario > label {
//     display: flex;
//     flex-direction: column;
    
//     width: 100%;
//     align-items: flex-start;
//   };
  
//   /* Estilos de los campos de texto */
//   registroUsuario > label > input {
//     width: 100%;
//     margin: 0.25em 0;
//     padding: 0.1em;
  
//     font-size: large;
  
//     border-radius: 0.5em;
//   };
  
//   /* Estilos de los botones */
//   registroUsuario__submit {
//     width: 40%;
//     margin-top: 1em;
    
//     padding: 0.5em;
//     padding-right: -5em;
//     box-sizing: content-box;
//     border-radius: 0.8em;
//     cursor: pointer;
    
//   };
  
//   /* Estilo del mensaje de error */
//   registroUsuario__error {
//     color: white;
//     background-color: red;
//     font-size: medium;
//     border-radius: 0.25em;
//   };
  
//   /* Estilo del mensaje de éxito */
//   registroUsuario__success {

//     color: white;
//     background-color: green;
//     font-size: medium;
//     border-radius: 0.25em;
//   };
  
export const Sbutton_submit = styled.button`
    
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;