import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login.page";
import DashboardPage from "./pages/dashboard.page";
import AutoEvaluationFormPage from "./pages/autoEvaluationForm.page";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/auto-evaluation-create" element={ <AutoEvaluationFormPage/> }/>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
