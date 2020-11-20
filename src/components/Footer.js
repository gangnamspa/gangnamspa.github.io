import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  PHONE_FORMATTED,
  STREET,
  CITY_STATE,
  HOURS,
  EMAIL,
  ALL_RIGHTS,
} from "../utils/constants";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text ">GangNam Spa</h5>
            <div className="grey-text text-lighten-4 valign-wrapper m-t-20 m-b-10">
              <i className="material-icons icon-align m-r-10">location_on</i>
              <span>
                {STREET} {CITY_STATE}
              </span>
            </div>
            <div className="grey-text text-lighten-4 valign-wrapper m-b-10">
              <i className="material-icons icon-align m-r-10">local_phone</i>
              <span>{PHONE_FORMATTED}</span>
            </div>
            <div className="grey-text text-lighten-4 valign-wrapper m-b-10">
              <i className="material-icons icon-align m-r-10">email</i>
              <span>{EMAIL}</span>
            </div>
            <div
              className="grey-text text-lighten-4 valign-wrapper m-b-10"
              style={{ whiteSpace: "pre-line" }}
            >
              <i className="material-icons icon-align m-r-10">access_time</i>
              {HOURS}
            </div>
          </div>
          <div className="col l4 s12">
            {/* <img className="responsive-img" src={logoImage} alt="logo"/> */}
          </div>
          <div className="col l4 s12 right-align">
            <h5 className="white-text">Follow Us</h5>
            <h4>
              <a
                className="m-r-10"
                href="https://www.facebook.com/Gangnam-Spa-2136994659949416"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook />
              </a>

              <a
                className="m-r-10"
                href="https://www.instagram.com/gangnam_spahtx/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a
                className="m-r-10"
                href="https://twitter.com/SpaGangnam?lang=e"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">{ALL_RIGHTS}</div>
      </div>
    </footer>
  );
};

export default Footer;
