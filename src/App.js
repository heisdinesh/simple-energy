import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
