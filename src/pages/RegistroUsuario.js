import React from "react";
import Select from 'react-select';
import { SFixedContainer } from "../components/Containers/styles";
// import Form from "../components/Form/Form";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'; 

export const RegistroUsuario = () => {
  // Inicializar el estado del formulario en blanco
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [value, setValue] = React.useState(null);
  const [eye, setEye] =  React.useState(false);

  // Valores para dropdown y constante de cambio
  const options = [
    {value: 'Empresa', label: 'Soy una empresa'},
    {value: 'Solicitante', label: 'Busco trabajo'}
  ]

  const onDropdownChange = (value) => {
    setValue (value);
    console.log (value);
  }

  // Función mostrar y ocultar contraseña
  const toggleEye = () => {
    setEye (prevState => !prevState);
  } 
  const toggleEye2 = () => {
    setEye (prevState => !prevState);
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
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (password.trim() !== confirmPassword.trim()) {
      setError('Passwords do not match');
      return;
    }

    console.log(`Data submitted:
    name: ${name}
    email: ${email}
    password: ${password}
    confirmPassword: ${confirmPassword}`);

    // Enviar el formulario
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
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
    <SFixedContainer size={275}>
    <form className="registroUsuario"onSubmit={handleSubmit}>
      {error && <div className="registroUsuario__error"> {error}  </div>}
      <label>
        Nombre:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      </label>
      <label>
        Contraseña:
        <input type= {eye ? "text": "password"} name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
        <button className='BotónOjo' onClick={toggleEye}> 
            {eye ? <AiOutlineEyeInvisible/> : 
          <AiOutlineEye/> 
            }
        </button>
      </label>
      <label>
        Confirmar contraseña:
        <input type= {eye ? "text": "password"} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
        <button className='BotónOjo2' onClick={toggleEye2}> 
            {eye ? <AiOutlineEyeInvisible/> : 
          <AiOutlineEye/> 
            }
        </button>
      </label>
      <label> 
        ¿Para qué usarás Get Talent?
        <Select
        value= {value}
        options={options} 
        onChange= {onDropdownChange}> 
        </Select>
      </label>

      <button type="submit" className="registroUsuario__submit">
        Registro
        </button>

    </form >
    </SFixedContainer>
  )
};
export default RegistroUsuario;