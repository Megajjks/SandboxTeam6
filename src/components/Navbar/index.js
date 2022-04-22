import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div  className="navbar">
      <span>plantilla</span>
      <div className="navbar__buttons">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/edit")}>Crear</span>
        <span onClick={() => navigate("/registro")}>Registro</span>
        <span onClick={() => navigate("/login")}>Login</span>
        <span onClick={() => navigate("/confi")}></span>
        <span onClick={() => navigate("/correo")}>Registro</span>
      </div>
    </div>
  );
}

