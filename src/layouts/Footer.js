import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <div className="row">
          <div className="col-lg-6 col-6">
            <h4 className="aboutme">About me</h4>
            <p className="aboutme">
              I have a degree in Animation and Visual Effects from Red Deer
              Polytechnic specializing in storyboarding, and now I'm currently
              working on breaking into the industry.
            </p>
          </div>
          <div className="col-lg-6 col-6">
            <div className="row">
              <div className="col-lg-2">
                <a href="storyboard.html" className="fa fa">
                  Storyboard
                </a>
              </div>
              <div className="col-lg-2">
                <a
                  href="https://www.instagram.com/zack.rat.art/"
                  className="fa fa-instagram"
                >
                  Instagram
                </a>
              </div>
              <div className="col-lg-2">
                <a
                  href="https://www.linkedin.com/in/zackary-guckert/"
                  className="fa fa-linkedin"
                >
                  LinkedIn
                </a>
              </div>

              <div className="col-lg-2">
                <a
                  href="  https://www.artstation.com/zackrat_art"
                  className="fa fa-artstation"
                >
                  ArtStation
                </a>
              </div>
              <div className="col-lg-2">
                <a href=" contact.html" className="fa fa">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section: Social media --> */}
      </div>

      <div className="text-center text-dark p-3">
        © 2022 Web by{" "}
        <a className="text-dark" href="https://leilanoval.com">
          Leila Noval
        </a>
      </div>
    </>
  );
};

export default Footer;
