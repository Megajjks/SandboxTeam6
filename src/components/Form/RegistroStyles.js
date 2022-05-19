
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SFoormTitle = styled.div`
font-size: 25px;
font-weight: 600;
margin-left: 1.8em;

`;

export const SLlabel = styled.label`
display: block;
font-size: 14px;
font-weight: 600;
margin-left: 0px;
margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SLlaabel = styled.label`
display: block;
font-size: 11px;
font-weight: 600;
margin-left: 0px;
margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SIinput = styled.input`
outline: none;
border: 1px solid ${({ theme }) => theme.textFade};
width: 80%;
padding: ${v.smSpacing};
font-size: 15px;
border-radius: ${v.borderRadius};
`;

export const SBbutton = styled.button `
${btnReset};
width: 50%;
background: ${({ theme }) => theme.bgSecondary};
color: ${({ theme }) => theme.textSecondary};
padding: ${v.smSpacing};
display: flex;
float: center;
background-color: #173B5A;
color:white;
margin-left: 3em;
justify-content: center;
border-radius: ${v.borderRadius};
margin-top: ${v.mdSpacing};
cursor: pointer;
`;

export const SFform = styled.form`
width: 100%;
background: ${({ theme }) => theme.bg2};
border-radius: ${v.borderRadius};
padding: ${v.mdSpacing};
`;

export const SBbuutton = styled.button`
/* ${btnReset};0 */
width: 2em;
margin-top: 1em;
padding: 1em;
box-sizing: content-box;
border-radius: 0.8em;
cursor: pointer;
padding: ${v.smSpacing};
justify-content: center;
/* width: 100%;
background: ${({ theme }) => theme.bgSecondary};
color: ${({ theme }) => theme.textSecondary};
padding: ${v.smSpacing};
display: flex;
background-color: pink;
color:blue;


cursor: pointer; */
`;
// export const SFormTitle = styled.span`
//     font-size: 24px;
//     font-weight: 600;
// `;

export const SDdiv = styled.div`
:first-of-type {
    margin-top: ${v.mdSpacing};
}
:not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
}
`;

export const SIimg = styled.img`
width: 45em;
height: 50em;
float: left;
margin-right: -100em;

/* img {
    max-width: 100%;
    height: auto;
} */

// `;