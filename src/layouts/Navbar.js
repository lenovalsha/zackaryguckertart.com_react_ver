import React from "react";
import { Link } from "react-router-dom";
import storyboardEntry from "../components/Storyboard/storyboardEntry";
import { entry } from "../components/Misc/entry";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollIntoView } from "../hooks/navigation";
import logo from "../assets/images/logo.png";
function Navbar() {
  const location = useLocation();
  ScrollIntoView(location);
  const [isChange, setIsChange] = useState(false);
  const Change = () => {
    setIsChange(!isChange);
  };
  return (
    <nav className={`navContainer navbar ${isChange ? "change" : ""}`}>
      <div className="col-lg-4">
        <div className="logo">
          <Link to="/">
            <a href="/index">
              <img src={logo} />
            </a>
          </Link>
        </div>
      </div>
      <div class="col-lg-7">
        <div className="hamburger-menu" onClick={Change}>
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
        </div>
        <ul class="nav-list nav justify-content-center font-weight-light">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-items">
            <div class="dropdown">
              <Link to="/storyboard">Storyboard</Link>
              <div class="dropdown-content">
                {storyboardEntry.map((e) => {
                  return (
                    <Link to={"/storyboard#" + e.id} class="nav-link">
                      {e.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li class="nav-items">
            <div class="dropdown">
              <Link to="/misc">Misc Drawings</Link>
              <div class="dropdown-content">
                {entry.map((e) => {
                  return (
                    <Link to={"/misc#" + e.id} class="nav-link">
                      {e.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li class="nav-item">
            <Link to="https://www.linkedin.com/in/zackary-guckert/">
              LinkedIn
            </Link>
          </li>
          <li class="nav-item">
            <Link to="https://www.instagram.com/zack.rat.art/">Instagram</Link>
          </li>

          <li class="nav-item">
            <Link to="https://www.artstation.com/zackrat_art">ArtStation</Link>
          </li>
          <li class="nav-item">
            <Link to="https://www.youtube.com/@zackaryguckert1826">
              YouTube
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">ContactMe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
