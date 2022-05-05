import React from "react";
//import { Link } from "react-router-dom";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";
import { SIimg } from "../components/Form/styles";
import cover from "../assets/ilustration/Get-Talent.jpg";

const SignIn = () => {
      
    const onSubmitHandler = (form, callback) => {
        console.log("Sign In submitted: ", form);
        callback();
    };

    return (
        <><SFixedContainer>
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
        </SFixedContainer><SIimg src={cover} alt="coverAlt" /></>
    );
};

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

export default SignIn;