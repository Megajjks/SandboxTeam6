import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import Login from "./pages/Login/Login";
import Unauthorized from "./components/Unauthorized";

const ROLES = {
  empresa: "1",
  solicitante: "2",
};

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rutas de accesso publico */}
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Rutas privadas (acceso a gente que ya se logueo) */}
        <Route element={<RequireAuth allowedRoles={ROLES.solicitante} />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="*" element={<h1>Error 404: No encontrado</h1>} />
        {/* <Route path="/HomePage" >
            <HomePage/>
            </Route> */}
      </Routes>
    </Router>
  );
};
