import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import { RegistroUsuario } from "./pages/RegistroUsuario";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                 <HomePage />
                
            </Route>
            <Route exact path="/estadisticas">
                <h1>Estadísticas</h1>
            </Route>
                 
            <Route exact path="/login">
                <h1>Login</h1>
            </Route>
                  <RegistroUsuario />
            <Route exact path="/registroUsuario">
                <h1>Registro</h1>
            </Route>
        </Switch>
    );
};

export default Routes;
