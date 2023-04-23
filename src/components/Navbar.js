import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
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
            <Link to="/">
              <a class="nav-link active" href="index.html">
                Home
              </a>
            </Link>
          </li>
          <li class="nav-items">
            <div class="dropdown">
              <Link to="/storyboard">
                <a class="nav-link" href="storyboard.html">
                  Storyboard
                </a>
              </Link>
              <div class="dropdown-content">
                <a class="nav-link" href="storyboard.html#coffeeShop">
                  Coffee Shop - Comedy
                </a>
                <a class="nav-link" href="storyboard.html#Sci-Fi">
                  Sci-Fi Action
                </a>
                <a class="nav-link" href="storyboard.html#goodSamaritan">
                  Good Samaritan - Drama
                </a>
              </div>
            </div>
          </li>

          <li class="nav-items">
            <div class="dropdown">
              <a class="nav-link" href="Misc.html">
                Misc Drawings
              </a>
              <div class="dropdown-content">
                <a class="nav-link" href="Misc.html#storyBeats">
                  Story Beats
                </a>
                <a class="nav-link" href="Misc.html#charExploration">
                  Character Exploration
                </a>
                <a class="nav-link" href="Misc.html#figDrawings">
                  Figure Drawings
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/zackary-guckert/"
            >
              LinkedIn
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/zack.rat.art/">
              Instagram
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href=" https://twitter.com/ZackRat_Art">
              Twitter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.artstation.com/zackrat_art">
              ArtStation
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
