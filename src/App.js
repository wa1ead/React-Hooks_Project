import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Description from "./components/Description";
import Favourites from "./components/Favourites";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
