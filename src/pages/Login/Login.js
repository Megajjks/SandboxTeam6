/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
  SBbutton,
} from "./LoginStyle";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import Toast from "../../components/Atoms/Toast/Toast";

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
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(urlApi, {
        email: formData.email,
        password: formData.password,
      });
      setLoading(false);
      //guardamos datos en el localstorage
      saveLocalStorage(data);
      //redireccionamos
      navigate("/home");
    } catch (error) {
      setError(
        error
          ? error.response.data.msg
          : "Algo salio mal :c, vuelve a intentarlo"
      );
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

  const saveLocalStorage = (data) => {
    //Borramos localstorage previo
    localStorage.clear();
    //guardamos el token
    localStorage.setItem("accesstoken", JSON.stringify(data.tokens.access));
    localStorage.setItem("refreshtoken", JSON.stringify(data.tokens.refresh));
  };

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> CREAR CUENTA </SFoormTitle>

          {error && <Toast color="error">{error}</Toast>}

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
