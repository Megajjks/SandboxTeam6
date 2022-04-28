import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import SignIn from "./pages/SignIn";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                 <HomePage />
                
            </Route>
                 
            <Route exact path="/signIn" >
            <SignIn/>
            </Route>
                  
            <Route exact path="/registroUsuario">
            <RegistroUsuario />
            </Route>
        </Switch>
    );
};

export default Routes;
