import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Storyboard from "./components/Storyboard";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
