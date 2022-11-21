import { Routes, Route } from "react-router-dom";
import Privacy from "./Privacy";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
