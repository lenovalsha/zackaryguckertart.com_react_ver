import React from "react";
import { Link } from "react-router-dom";
import storyboardEntry from "../components/Storyboard/storyboardEntry";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ScrollIntoView } from "../hooks/navigation";
function Navbar() {
  const location = useLocation();
  ScrollIntoView(location);
  return (
    <nav class="navContainer">
      <div class="col-lg-6">
        <div class="logo">
          <Link to="/">
            <a href="/index">
              <img src="../images/logo.png" />
            </a>
          </Link>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav justify-content-center font-weight-light">
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
                <Link to="/misc#storyBeats" class="nav-link">
                  Story Beats
                </Link>
                <Link to="/misc#charExploration" class="nav-link">
                  Character Exploration
                </Link>
                <Link to="/misc#figDrawings" class="nav-link">
                  Figure Drawings
                </Link>
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
            <Link to="https://twitter.com/ZackRat_Art">Twitter</Link>
          </li>
          <li class="nav-item">
            <Link to="https://www.artstation.com/zackrat_art">ArtStation</Link>
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
