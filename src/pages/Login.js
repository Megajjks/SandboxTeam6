/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import axios from "axios";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";
import { SIimg } from "../components/Form/styles";

import cover from "../assets/ilustration/Get-Talent.jpg";

const urlApi = "https://gettalent-6.herokuapp.com/login/";

export const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // State

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
                password: form.Contraseña
            })
            setLoading(false);

            if (status >= 200 && status < 300)
                console.log("Respuesta ok:", data);
        } catch (error) {
            setLoading(false);
            setError(true);

            console.error(error);
        }
    }

    const formArr = [
        {
            label: "Email",
            name: "email",
            type: "text",
        },
        {
            label: "Contraseña",
            name: "Contraseña",
            type: "password",
        },
    ];

    // @John Estabas retornando tu formulario como la función de limpieza de tu useEffect 
    // en vez del renderizado de tu componente
    return (
        <>
            <SFixedContainer>
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
                    }} />
            </SFixedContainer>
            <SIimg src={cover} alt="coverAlt" />
        </>
    );
};
export default Login;