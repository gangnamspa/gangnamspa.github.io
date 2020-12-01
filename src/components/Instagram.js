import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { iMassageChair, i2, i3, iMovie, i5, i6, i7, i8, i9 } from "../images";

class Instagram extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems, {});
  }
  render() {
    return (
      <div className="container m-t-50 m-b-50">
        <div className="row">
          <div className="col s12 brown-text m-b-20">
            <h5 className="text-line">Club Facilities & Services</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={iMassageChair}
              alt="sample-1"
            />
          </div>

          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i2}
              alt="sample-2"
            />
          </div>

          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i3}
              alt="sample-3"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={iMovie}
              alt="sample-4"
            />
          </div>
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i5}
              alt="sample-1"
            />
          </div>

          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i6}
              alt="sample-2"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i7}
              alt="sample-3"
            />
          </div>
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i8}
              alt="sample-4"
            />
          </div>
          <div className="col s12 m6 l4">
            <img
              className="responsive-img materialboxed"
              src={i9}
              alt="sample-4"
            />
          </div>
        </div>

        {/* <div className="center-align">
          <a href="#0" className="brown waves-effect waves-light btn m-r-5">View More</a>
          <a href="#1" className="orange waves-effect waves-light btn m-l-5">Follow on Instagram</a>
        </div> */}
      </div>
    );
  }
}

export default Instagram;
