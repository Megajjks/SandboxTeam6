import React from "react";
import Select from 'react-select';
import { SFixedContainer } from "../components/Containers/styles";
// import Form from "../components/Form/Form";
import {
  SBbutton,
  // SBbuutton,
  SFform,
  SFoormTitle,
  SIinput,
  SDdiv,
  SIimg,
  SLlabel,
  SLlaabel,

} from "../components/Form/styles";
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

import ToggleInput from "../components/Form/Input";
import cover from "../assets/ilustration/Get-Talent.jpg";
// import Image from "../assets/ilustration/Image"

const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";

export const RegistroUsuario = () => {
  // Inicializar el estado del formulario en blanco
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [value, setValue] = React.useState(null);

  // Valores para dropdown y constante de cambio
  const options = [
    { value: 'Empresa', label: 'Soy una empresa' },
    { value: 'Solicitante', label: 'Busco trabajo' }
  ]

  const onDropdownChange = (value) => {
    setValue(value);
    console.log(value);
  }

  // Inicializar el estado de error y éxito 
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);


  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario 
    event.preventDefault();

    // Resetear el estado de error
    setError('');

    // Validar el formulario
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (password.trim() !== confirmPassword.trim()) {
      setError('Passwords do not match');
      return;
    }

    // console.log(`Data submitted:
    // email: ${email}
    // password: ${password}
    // confirmPassword: ${confirmPassword}`);

    // Enviar el formulario
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        confirmPassword
      })
    }

    fetch('https://gettalent-6.herokuapp.com/signup/', requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // Checar por respuesta del usuario
        if (!response.ok) {
          const error = { message: data, status: response.status };
          return Promise.reject(error);
        }

        setSuccess(true)
      })
      .catch(error => { setError(`Error(${error.status}): ${error.message}`) });
  }

  // Mostrar el mensaje de éxito si el estado success es true
  if (success)
    return <div className="registroUsuario__success"> Registro exitoso </div>

  // Mostrar el formulario

  return (

    <><SFixedContainer>
      <SFoormTitle> CREAR CUENTA </SFoormTitle>
      <SFform className="registroUsuario" onSubmit={handleSubmit}>
        {error && <SDdiv className="registroUsuario__error"> {error}  </SDdiv>}
        <SLlabel>
          Correo electrónico:
          <SIinput type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        </SLlabel>
        <SLlabel>
          Contraseña:
          <ToggleInput name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} pattern={passwordPattern} />
        </SLlabel>
        <SLlaabel>
          *La contraseña debe contener un mínimo de 6 y un máximo de 20 caracteres alfanuméricos; al menos una letra mayúscula y un caracter especial.
        </SLlaabel>
        <SLlabel>
          Confirmar contraseña:
          <ToggleInput name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
        </SLlabel>
        <SLlabel>
          ¿Para qué usarás Get Talent?
          <Select
            value={value}
            options={options}
            onChange={onDropdownChange}>
          </Select>
        </SLlabel>
        <SLlaabel>
          <Link to="/login"> Ya tengo una cuenta </Link>
        </SLlaabel>

        <SBbutton type="submit" className="registroUsuario__submit">
          ENTRAR
        </SBbutton>
      </SFform>
    </SFixedContainer>
      <SIimg src={cover} alt="coverAlt" /></>

  );
};
export default RegistroUsuario;