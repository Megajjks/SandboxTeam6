import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SLayout, SMain } from "../components/Layout/styles";


const RegistroVacante = ({ children }) => {
        return (
            
            <SLayout>
                <Sidebar />
                <SMain>{children}</SMain>
            </SLayout>
        );
    
    
};

export default RegistroVacante;
