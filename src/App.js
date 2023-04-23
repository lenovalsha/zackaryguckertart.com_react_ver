import Navbar from "./layouts/Navbar";
import Home from "./containers/Home";
import Misc from "./containers/Misc";
import Storyboard from "./containers/Storyboard";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
