import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import Login from "./pages/Login";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Rutas de accesso publico */}
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<RegistroUsuario />} />

                {/* Rutas privadas (acceso a gente que ya se logueo) */}
                {/* <Route element={<Layout/>}>
                 <Route exact path="/dashboard" element={<HomePage />}/>
            </Route> */}

                <Route path="/dashboard" element={<Layout />} />

                <Route path="/registerva" element={<HomePage />} />

                <Route path="*" element={<h1>Error 404: No encontrado</h1>} />
                {/* <Route path="/HomePage" >
            <HomePage/>
            </Route> */}
            </Routes>
        </Router>
    );
};
