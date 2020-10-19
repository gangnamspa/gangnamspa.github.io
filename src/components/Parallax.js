import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import PageSection from "./PageSection";
import LandingImage1 from "../images/facility/2029.jpg";
import LandingImage2 from "../images/facility/4506.jpg";

class Parallax extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  }
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={LandingImage1} alt="landing1" />
          </div>
          <div className="row container">
            <div className="col s12 m-t-40 p-t-50 white-text center-align">
              <h2 className="text-shadow p-t-50">Welcome to GangNam Spa</h2>
              <div className="col s8 offset-s2 text-shadow">
                <h5 className="text-shadow">
                  Introducing a luxury spa in the heart of Houston, Texas.
                </h5>
                {/* <a href="#0" className="waves-effect btn-large m-t-20">Get Started</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="section white">
          <PageSection title="GangNam Spa" />
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={LandingImage2} alt="landing2" />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
