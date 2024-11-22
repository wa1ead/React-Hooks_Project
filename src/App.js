import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/description/:id" element={<Description />} />
    </Routes>
  );
}

export default App;
