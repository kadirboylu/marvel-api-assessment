import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Character from "@/pages/Character";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
}

export default App;
