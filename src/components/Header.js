import React from "react";
import {
  PHONE,
  PHONE_NUMBERS,
  STREET,
  CITY_STATE,
  HOURS,
} from "../utils/constants";

const Header = () => {
  return (
    <div className="row m-t-40">
      <div className="col s12 l4 valign-wrapper">
        <i className="small material-icons m-r-10">local_phone</i>
        <span>
          <a href={`tel:+1${PHONE_NUMBERS}`}>{PHONE}</a>
          <br />
          Click to Call
        </span>
      </div>
      <div className="col s12 l4 valign-wrapper">
        <i className="small material-icons icon-align m-r-10">location_on</i>
        <span>
          {STREET}
          <br />
          {CITY_STATE}
        </span>
      </div>
      <div
        className="col s12 l4 valign-wrapper"
        style={{ whiteSpace: "pre-line" }}
      >
        <i className="small material-icons icon-align m-r-10">access_time</i>
        {HOURS}
      </div>
    </div>
  );
};

export default Header;
