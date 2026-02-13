import { BrowserRouter, Routes, Route } from "react-router-dom";
import Valentine from "./pages/valentine.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Memories from "./pages/Memories.jsx";
import Read from "./pages/Read.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/memories"
          element={
            <ProtectedRoute>
              <Memories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/read"
          element={
            <ProtectedRoute>
              <Read />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}