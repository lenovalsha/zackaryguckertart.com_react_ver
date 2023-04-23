import React from "react";
import YouTube from "./YouTube";

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
              <img
                id="avatar"
                class="bg-img"
                src="./images/welcome.png"
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

        <div className="container-fluid">
          <div className="row" id="youtube">
            <YouTube
              iframe={
                <iframe
                  width="1237"
                  height="696"
                  src="https://www.youtube.com/embed/LqdIon7qfHY"
                  title="Subway Action Animatic"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              }
            />
            <YouTube
              iframe={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/W7Gv8rL3uzg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              }
            />

            <YouTube
              iframe={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dhURCJOzZ6M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              }
            />
            <YouTube
              iframe={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KSs0n9tct5c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
