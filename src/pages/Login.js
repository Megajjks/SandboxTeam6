/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { SFixedContainer, SIimg } from "./LoginStyle";
import Form from "../components/Form/Form";
import ToggleInput from "../components/Form/Input";
import cover from "../assets/ilustration/Get-Talent.jpg";
const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";
const urlApi = "https://gettalent-6.herokuapp.com/login/";

export const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // State
  const [password, setPassword] = React.useState("");
  // @John Si no vas a usar variables, puedes quitarlas para evitar errores de ESLint
  // O comentar el código completamente
  // No recomiendo el eslint-disable porque si se te olvida, vas a tener código redundante o con errores
  const [, setLoading] = useState(false);
  // const [loding, setLoading] = useState(false); // @John Comentado para futura referencia
  const [, setError] = useState(false);
  // const [error, setError] = useState(false); // @John Comentado para futura referencia
  // const [data, setData] = useState(null);
  const onSubmitHandler = async (form) => {
    try {
      setLoading(true);
      const { status, data } = await axios.post(urlApi, {
        email: form.email,
        password: form.Contraseña,
      });
      setLoading(false);

      if (status >= 200 && status < 300) console.log("Respuesta ok:", data);
    } catch (error) {
      setLoading(false);
      setError(true);

      console.error(error);
    }
  };

  const formArr = [
    {
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      label: "Password",
      name: "Contraseña",
      type: "password",
    },
  ];

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <Form
          title={"INICIAR SESIÓN"}
          formArr={formArr}
          submitBtn={"ENTRAR"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "No tienes cuenta?",
            link: {
              label: "Registro",
              to: "/register",
            },
          }}
        />
      </SFixedContainer>
    </>
  );
};
export default Login;