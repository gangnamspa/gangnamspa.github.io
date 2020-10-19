import React from "react";
import PageHeader from "../components/PageHeader";

import {
  STREET,
  CITY_STATE,
  PHONE_FORMATTED,
  EMAIL,
  HOURS,
} from "../utils/constants";

const ContactPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageHeader content="Contact Us" />
      <div className="row container p-b-50 center-align">
        <h3 className="under">Location</h3>
        <div className="col s12 p-b-40">
          <h5 className="p-b-20">
            {STREET}
            <br /> {CITY_STATE}
          </h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13844.395355544244!2d-95.6460075!3d29.8325687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a2a4af5c38f9830!2sGangnam+Spa+Heaing+Paradise!5e0!3m2!1sen!2sus!4v1543202989434"
            title="gns-map"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col s12 l6 center-align">
          <h4 className="under">Contact Info</h4>
          <h5>{PHONE_FORMATTED}</h5>
          <h5>{EMAIL}</h5>
        </div>

        <div className="col s12 l6 center-align">
          <h4 className="under">Hours</h4>
          <h5 style={{ whiteSpace: "pre-line" }}>{HOURS}</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
