import styled from "styled-components";
import background from "../assets/ilustration/Get-Talent.jpg";
import { sizeQuery } from "../styles/variables";

export const SFixedContainer = styled.div`
  /* Esta es una forma mas rapida de maquetar la vista de login, usando grid layout */
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr minmax(320px, 40%);

  @media screen and (max-width: ${sizeQuery.Tablet}) {
    /* Cuando la vista sea menor que 768 todo se apila en columnas */
    grid-template-columns: 1fr;
  }
`;

export const SIimg = styled.div`
  /*En vez de insertar la imagen por fuera, mejor agregarlo como background para que se acomode solo  */
  background-image: url(${background});
  background-color: #cccccc;
  background-size: contain;

  @media screen and (max-width: ${sizeQuery.Tablet}) {
    /* Cuando la vista sea menor que 768 la imagen desaparece, no se necesita en tablet o mobile */
    display: none;
  }
`;
