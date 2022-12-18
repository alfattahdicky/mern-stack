import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
