// import styled from "styled-components"
// import { Link } from "react-router-dom";

// import { btnReset, v } from "../../styles/variables";

// export const SForm = styled.form`
//     width: 100%;
//     background: ${({ theme }) => theme.bg2};
//     border-radius: ${v.borderRadius};
//     padding: ${v.mdSpacing};
// `;

// export const SFormTitle = styled.span`
//     font-size: 24px;
//     font-weight: 600;
// `;

// export const SFormControl = styled.div`
//     :first-of-type {
//         margin-top: ${v.mdSpacing};
//     }
//     :not(:last-of-type) {
//         margin-bottom: ${v.smSpacing};
//     }
// `;

// export const SLabel = styled.label`
//     display: block;
//     font-size: 14px;
//     font-weight: 600;
//     margin-left: 4px;
//     margin-bottom: calc(${v.smSpacing} / 4);
// `;

// export const SInput = styled.input`
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.textFade};
//     width: 100%;
//     padding: ${v.smSpacing};
//     font-size: 14px;
//     border-radius: ${v.borderRadius};
// `;

// export const SButton = styled.button`
//     ${btnReset};
//     width: 100%;
//     background: ${({ theme }) => theme.bgSecondary};
//     color: ${({ theme }) => theme.textSecondary};
//     padding: ${v.smSpacing};
//     display: flex;
//     justify-content: center;
//     border-radius: ${v.borderRadius};
//     margin-top: ${v.mdSpacing};
//     cursor: pointer;
// `;

// export const SRedirect = styled.div`
//     font-size: 12px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     margin-top: ${v.smSpacing};
// `;
// export const SRedirectLabel = styled.span`
//     color: ${({ theme }) => theme.text2};
// `;

// export const SRedirectLink = styled(Link)`
//     color: ${({ theme }) => theme.primary};
// `;


// // /* Estilos del formulario base */
// //  export const registroUsuario = styled {  
// //     float: right;
// //     width: 400px;
// //     margin: 7em;
// //     padding: 1em;
// //     background-color: #FFF6FD;
// //     border-radius: 0.5em;
// //     font-size: normal;
// //     background-position:200%;
// //   };

 
// //   /* Estilos de las etiquetas */
// //   registroUsuario > label {
// //     display: flex;
// //     flex-direction: column;
    
// //     width: 100%;
// //     align-items: flex-start;
// //   };
  
// //   /* Estilos de los campos de texto */
// //   registroUsuario > label > input {
// //     width: 100%;
// //     margin: 0.25em 0;
// //     padding: 0.1em;
  
// //     font-size: large;
  
// //     border-radius: 0.5em;
// //   };
  
// //   /* Estilos de los botones */
// //   registroUsuario__submit {
// //     width: 40%;
// //     margin-top: 1em;
    
// //     padding: 0.5em;
// //     padding-right: -5em;
// //     box-sizing: content-box;
// //     border-radius: 0.8em;
// //     cursor: pointer;
    
// //   };
  
// //   /* Estilo del mensaje de error */
// //   registroUsuario__error {
// //     color: white;
// //     background-color: red;
// //     font-size: medium;
// //     border-radius: 0.25em;
// //   };
  
// //   /* Estilo del mensaje de éxito */
// //   registroUsuario__success {

// //     color: white;
// //     background-color: green;
// //     font-size: medium;
// //     border-radius: 0.25em;
// //   };
  
// export const Sbutton_submit = styled.button`
    
//     position: absolute;
//     top: ${v.xxlSpacing};
//     right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     background: ${({ theme }) => theme.bg};
//     box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;

//     transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
// `;