import React from "react";
import YouTube from "../components/YouTube";
import intro from "../assets/images/welcome.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <h1 id="name" className="text-center font-weight-light">
          Zackary Guckert
        </h1>
        <p
          id="subname"
          className="text-center font-weight-light type type-animation-nav"
        >
          <span>A Story Artist</span>
        </p>
      </div>
      <div className="container-fluid backgroundintro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <LazyLoadImage
                id="avatar"
                class="bg-img"
                src={intro}
                alt="... "
              />
            </div>
            <div className="col-lg-6 introtext">
              <p id="textIntro" className="font-weight-light">
                "Hey! I'm Zack, a story artist and fan of all things cinema!
                Feel free to contact me at:
                <a className="email" href="mailto:zackaryguckert@gmail.com">
                  {" zackaryguckert@gmail.com "}
                </a>
                if you have any questions, please don't hesitate to reach out!"
              </p>
            </div>
            <div style={{ marginBottom: "100px", marginTop: "100px" }}></div>
          </div>
        </div>
      </div>

      {/* <!-- --------------------------- ANIMATION VIDEO --> */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#6bbcbc", paddingBottom: "100px" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            Thanks for visiting my story portfolio, Look below to see some of my
            animatics. If you like to contact me,
            <span>
              <a href="contact.html"> connect with me </a>
            </span>
            directly.
          </p>
        </div>
        <YouTube />
      </div>
    </>
  );
}

export default Home;
