import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Misc from "./pages/Misc";
import Storyboard from "./pages/Storyboard";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storyboard" element={<Storyboard />} />
          <Route exact path="/misc" element={<Misc />} />
          <Route exact path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
