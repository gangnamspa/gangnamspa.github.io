import React from "react";
import { Link } from "react-router-dom";

const PageSection = (props) => {
  const { title, children } = props;
  return (
    <div className="row container">
      <h3 className="header col s12 under">{title}</h3>
      {children ? (
        children
      ) : (
        <div className="col s12">
          <h6>
            GangNam Spa offers a luxury wellness experience with over 30,000
            square feet of specialty baths, saunas rooms, lounging, and dining
            areas rooted in Korean culture. Our facilities aim to deliver an
            exceptional quality spa experience to discerning clients who need
            pampering as well as value-conscious clients who view the spa as a
            necessity.
          </h6>
          <h6>
            We value our guests and strive to provide a rewarding experience to
            all. Therefore, we encourage each guest to review and understand our{" "}
            <Link to="/policy">general policy & spa etiquette</Link>.
          </h6>
          <div className="center-align">
            <a
              href="https://wellnesscouncil.org/best-massage-places/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="250"
                alt="wellness-badge"
                src="https://wellnesscouncil.org/wp-content/uploads/wellness-council-best-massage-place-badge.png"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSection;
