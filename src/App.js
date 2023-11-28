import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Auth from "./Components/Auth";
import { useContext } from "react";
import { tokenAuthorisationContext } from "./Contexts/TokenAuth";

function App() {
  // Context
  const { isAuthorised, setIsAuthorised } = useContext(
    tokenAuthorisationContext
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Based on context route */}
        <Route
          path="/dashboard"
          element={isAuthorised ? <Dashboard /> : <Home />}
        />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/projects"
          element={isAuthorised ? <Projects /> : <Home />}
        />
        <Route path="/register" element={<Auth register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
