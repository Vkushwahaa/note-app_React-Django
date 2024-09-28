import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import Header from "./components/Header";
import {
  HashRouter as Router, // Make sure to use HashRouter
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
