import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import Login from "./pages/Login/Login";
import Unauthorized from "./components/Unauthorized";
import {ROLESPATH} from "./Utils/ParseData"

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
        <Route element={<RequireAuth allowedRoles={ROLES.empresa} />}>
          <Route path={`${ROLESPATH.ROL01}`} element={<HomePage />}>
            <Route path="home" element={<h1>home de la empresa</h1>} />
            <Route path="registerva" element={<h1>registerva</h1>} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={ROLES.solicitante} />}>
          <Route path={`${ROLESPATH.ROL02}`} element={<HomePage />}>
            <Route exact path="home" element={<h1>home del empleado</h1>} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Error 404: No encontrado</h1>} />
      </Routes>
    </Router>
  );
};
