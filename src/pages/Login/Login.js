/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
  SBbutton,
} from "./LoginStyle";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";

/* Constantes */
const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";
const urlApi = "https://gettalent-6.herokuapp.com/login/";
const INITIAL_STATE = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const { status, data } = await axios.post(urlApi, {
        email: formData.email,
        password: formData.password,
      });
      setLoading(false);
      console.log("data", data);
      console.log("status", status);
      //if (status >= 200 && status < 300) console.log("Respuesta ok:", data);
    } catch (error) {
      setError("Algo salio mal :c, vuelve a intentarlo");

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> CREAR CUENTA </SFoormTitle>
          <InputText
            label="Email"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="example@email.com"
            callback={(e) => {
              onChangeHandler(e);
            }}
            isRequired={true}
          />
          <InputText
            label="Password"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            pattern={passwordPattern}
            callback={(e) => {
              onChangeHandler(e);
            }}
            isRequired={true}
          />

          {loading ? (
            <SpinnerSmall />
          ) : (
            <SBbutton type="submit">ENTRAR</SBbutton>
          )}
        </SFform>
      </SFixedContainer>
    </>
  );
};
export default Login;
