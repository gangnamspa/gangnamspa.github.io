import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <ul className="hide-on-small-and-down container">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/policy">POLICY</Link>
        </li>
        <li>
          <Link to="/price">PRICE</Link>
        </li>
        <li>
          <Link to="/facilities">FACILITIES</Link>
        </li>
        <li>
          <Link to="/dining">DINING</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/promotion">PROMOTIONS & MEMBERSHIP</Link>
        </li>
        <li>
          <Link to="/massagechair">MASSAGE CHAIRS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
