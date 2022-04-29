import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import SignIn from "./pages/SignIn";

const Routes = () => {
    return (
        <Switch> 
            {/* Rutas de accesso publico */}
            <Route exact path="/" >
            <SignIn/>
            </Route>
            <Route exact path="/login" >
            <SignIn/>
            </Route>
                  
            <Route exact path="/register">
            <RegistroUsuario />
            </Route>
            
            {/* Rutas privadas (acceso a gente que ya se logueo) */}
            {/* <Route element={<Layout/>}>
                 <Route exact path="/dashboard" element={<HomePage />}/>
            </Route> */}
            <Route exact path="/dashboard">
                <Layout/>
            </Route>
        </Switch>
    );
};

export default Routes;
