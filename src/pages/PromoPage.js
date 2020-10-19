import React from "react";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

import { EMAIL, CURRENT_PROMOTION } from "../utils/constants";
import applicationForm from "../files/application-form.pdf";

import premierImage from "../images/membership-cards-platinum.jpg";
import goldImage from "../images/membership-cards-gold.jpg";
import silverImage from "../images/membership-cards-silver.jpg";

const PromoPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageHeader content="Promotion & Membership" />
      {CURRENT_PROMOTION && (
        <>
          <PageSection title="Current Promotion">
            <div className="col s12">
              <h4>{CURRENT_PROMOTION}</h4>
              {/* <h5>
            Currently, we are only open sales limited to quantity of 100 per
            each yearly membership. We will post update for a six months and
            monthly membership sales when it becomes available.
          </h5> */}
              {/* <h5>Yearly membership expiration date will be extended to May 2020 for the early
            purchase through February 2019.</h5> */}
            </div>
          </PageSection>
          <hr />
        </>
      )}

      <PageSection title="Membership Card">
        <div className="col s12">
          <h5>
            For spa membership, please download and fill out the{" "}
            <a href={applicationForm} target="_blank" rel="noopener noreferrer">
              Application Form
            </a>{" "}
            and send it to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </h5>
        </div>
        <div className="col s12">
          <h4 className="center-align">
            PREMIER GOLD
            <br />
            <small>(Up to 2 people, limited to registered person only)</small>
          </h4>
          <img
            className="responsive-img"
            src={premierImage}
            alt="premier-gold"
          />
          <ul className="gns">
            <li>
              <b>$5,800 per year / $3,400 per 6 months</b>
            </li>
            <li>50% off on ONE accompanied guest admission at entrance</li>
            <li>20% off on ALL Services provided</li>
            <li>20% off on Food and Drinks</li>
          </ul>

          <h4 className="center-align">GOLD</h4>
          <img className="responsive-img" src={goldImage} alt="gold" />
          <ul className="gns">
            <li>
              <b>$3,400 per year / $1,800 per 6 months</b>
            </li>
            <li>50% off on ONE accompanied guest admission at entrance</li>
            <li>10% off on ALL Services provided</li>
            <li>10% off on Food and Drinks</li>
          </ul>

          <h5 className="center-align">SILVER</h5>
          <img className="responsive-img" src={silverImage} alt="silver" />
          <ul className="gns">
            <li>
              <b>$2,900 per year / $1,600 per 6 months</b>
            </li>
            <li>5% off on ALL Services provided</li>
            <li>5% off on Food and Drinks</li>
          </ul>
        </div>
      </PageSection>
    </div>
  );
};

export default PromoPage;
