import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SLayout, SMain } from "../components/Layout/styles";
const HomePage = ({ children }) => {
        return (
       
            <SLayout>
                <Sidebar />
                <SMain>{children}</SMain>
            </SLayout>
            
        );    
    
    
};

export default HomePage;
