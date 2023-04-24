import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Misc from "./pages/Misc";
import Storyboard from "./pages/Storyboard";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/storyboard" element={<Storyboard />} />
          <Route exact path="/misc" element={<Misc />} />
          <Route exact path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
