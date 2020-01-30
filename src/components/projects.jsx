import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project1.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://stockwatchlistapp.herokuapp.com/">
                          Stock Watch List App
                        </a>
                      </h3>
                      <span>Javascript, Node,js, Express, Mongoose</span>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-heart" /> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project3.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://artworld-sei.herokuapp.com">
                          ArtWorld e-commerce{" "}
                        </a>
                      </h3>
                      <span>DjangoDB, Python</span>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-heart" /> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project0.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Simon Game</a>
                      </h3>
                      <span>Javascript, HTML, CSS</span>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-heart" /> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project4.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://restaurant-website-01.herokuapp.com/">
                          Restaurant App
                        </a>
                      </h3>
                      <span>MERN Stack</span>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-heart" /> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
