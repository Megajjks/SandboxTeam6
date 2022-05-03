<<<<<<< HEAD
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <Routes />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create, Home, HomeCreate, RegistroUsuario } from "pages";
import { FormExample } from "pages/formExample";
import Navbar from "components/Navbar";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Create />} />
        <Route path="/home-create/" element={<HomeCreate />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="/form/" element={<FormExample />} />
        <Route path="/registro/" element={<RegistroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> pao_dev

export default App;
