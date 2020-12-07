import React from "react";

import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

import itemsImage from "../images/prohibited_items.png";
// import etiquetteImage from "../images/spa_etiquette.png";

const PolicyPage = () => {
  return (
    <React.Fragment>
      <PageHeader content="Policies" />
      <PageSection title="General Policy">
        <div className="col s12">
          <h5>
            These rules and regulations are in place for the protection and
            convenience of all guests. Violation of these rules and regulations
            may result in removal from the premises, with or without warning,
            and without refund.{" "}
            <b>
              All sales are final, no refunds or exchange due to dissatisfaction
              services.
            </b>
          </h5>

          {/* Drugs, Alcohol, and Smoking */}
          <h5 className="under">Drugs, Alcohol, and Smoking</h5>
          <ul className="gns">
            <li>
              We are a smoke, drug, and alcohol-free facility. The following are{" "}
              <b>strictly prohibited upon entry</b>:
              <ul>
                <li>
                  Smoking of any kind, including electronic cigarettes and
                  drugs.
                </li>
                <li>Consumption of alcoholic beverages.</li>
              </ul>
            </li>
            <li>
              GangNam Spa reserves the right to refuse the admission of those
              who are under the influence or who have any condition that poses a
              threat to the health or safety of themselves and/or others.
            </li>
            <li>
              Guests found to be smoking in the spa, of any kind, will be asked
              to leave the facility. This is to ensure a comfortable and
              pleasant environment for all guests.
            </li>
            <li>The smoking area is located outside the facility.</li>
          </ul>

          {/* No Disruptive Cell Phones & Noise */}
          <h5 className="under">No Disruptive Cell Phones & Noise</h5>
          <ul className="gns">
            <li>
              Be respectful towards our relaxation lounge and rooms. Refrain
              from loud conversations and/or noises.
            </li>
            <li>
              Excessive use of cell phones, including speakers, will{" "}
              <b>not be tolerated</b>.
            </li>
            <li>
              Creating excessive noise or causing a disruptive environment will
              be given a warning first and if noises continue to persist will
              result in being asked to leave the facility.
            </li>
          </ul>

          {/* Camera/Photography */}
          <h5 className="under">Camera / Photography</h5>
          <ul className="gns">
            <li>
              Large cameras and recording devices are <b>strictly prohibited</b>
              .
            </li>
            <li>
              We encourage our guests to take a quick picture for social media,
              but will not tolerate extended photo shoots, which will disrupt
              the other guests.
            </li>
            <li>
              Photography or recording, including live streaming, will not be
              allowed in the bathhouse and locker area. Guests that do not
              follow the rules will be asked to leave. Please respect the
              privacy of others.
            </li>
          </ul>

          {/* Indoor Clothing Policy & Etiquette */}
          <h5 className="under">Indoor Clothing Policy & Bathing Etiquette</h5>
          <ul className="gns">
            <li>
              No shoes allowed inside the facility; sandals or flip flops are
              allowed for the outdoor area only.
            </li>
            <li>
              Personal socks are not recommended only if the socks have grip
              however, grip socks may be purchased at the spa.
            </li>
            <li>Uniforms must be worn in the common area at all times. </li>
            <li>
              In the gender-separated sauna area, you <b>must</b> be completely{" "}
              <b>nude</b>. You will have to shower and rinse your body before
              using the tubs. Please keep in mind that there are no private tubs
              or sauna, therefore, you will be around people of the same gender.
            </li>
            <li>
              Hairs must not touch the water; therefore, all hairs must be tied
              up before entering the bathtubs.
            </li>
          </ul>

          {/* Age Guidelines */}
          <h5 className="under">Age Guidelines</h5>
          <ul className="gns">
            <li>
              Guests must be 18 years of age or older to enter GangNam Spa
              without an adult.
            </li>
            <li>
              As of December 1st, 2020, customers under the age of 12 will be
              restricted.
            </li>
            <li>Minors must always have adult supervision.</li>
            <li>There must be at least 1 adult for every 4 minors.</li>
            <li>
              Guests over the age of 75 must be accompanied by a guardian at all
              cost.
            </li>
          </ul>

          {/* Outside Food & Beverages */}
          <h5 className="under">Outside Food & Beverages</h5>
          <ul className="gns">
            <li>Outside food and beverages are not allowed at GangNam Spa.</li>
          </ul>

          {/* Public Display of Affection */}
          <h5 className="under">Public Display of Affection</h5>
          <ul className="gns">
            <li>
              No overt public displays of affection. We understand that love is
              grand, but we ask that you keep the personal displays of affection
              in check out of respect towards other guests.
            </li>
          </ul>

          {/* Theft */}
          <h5 className="under">Theft</h5>
          <ul className="gns">
            <li>
              Theft, any theft, is crime against the spa. Stealing from Gangnam
              Spa will <b>not be tolerated.</b>{" "}
            </li>
            <li>
              A person who commits theft in the state of Texas will be held
              responsible under the Texas Theft Liability Act and will result in
              legal consequences such as criminal fines.
            </li>
            <li>
              Gangnam Spa reserves the right to inspect any personal belongings,
              containers, backpack, briefcase, etc. due to any suspicions of
              theft.
            </li>
          </ul>

          {/* Harassment and Safety */}
          <h5 className="under">Harassment and Safety</h5>
          <ul className="gns">
            <li>
              Possession of dangerous weapons is <b>strictly forbidden</b>.
            </li>
            <li>
              Harassment towards GangNam Spa staff or guests, in any way, will
              result in immediate removal from the premises.
            </li>
          </ul>

          {/* Security and Identification */}
          <h5 className="under">Security and Identification</h5>
          <ul className="gns">
            <li>
              We require a <b>valid ID</b> for entry into GangNam Spa Club,
              regardless of age.
            </li>
            <li>
              GangNam Spa reserves the right to inspect any personal belongings,
              containers, backpack, briefcase, etc. upon entering or leaving the
              premises.
            </li>
          </ul>

          {/* GangNam Employees & Property */}
          <h5 className="under">GangNam Employees & Property</h5>
          <ul className="gns">
            <li>
              Destruction or defacement of GangNam Spa Club property, in any
              way, will not be tolerated.
            </li>
            <li>
              GangNam Spa Club is not responsible for any damaged, lost, or
              stolen property.
            </li>
            <li>
              Loss or damage of your locker wristband will result in a fee.
            </li>
            <li>
              Any complaints or problems must be promptly relayed to any of our
              personnel for immediate assistance.
            </li>
          </ul>

          <img src={itemsImage} alt="prohibited-items" />
          <h6>
            <b>Please note the following are prohibited:</b> Alcohol, outside
            food or beverage, smoking on premises, and large cameras
          </h6>

          {/* Additional Information */}
          <h5 className="under">Additional Information</h5>
          <ul className="gns">
            <li>
              Admission tickets are a day pass, so you can stay at the spa as
              long as you want until closing hours.
            </li>
            <li>
              Once you are checked into the facility you may not check out and
              come back so please plan accordingly. No refunds will be provided.
            </li>
            <li>
              All services, the restaurant, and products are excluded from the
              admission fee and will be additional charges.
            </li>
            <li>
              You are not obligated to book for any services. However, if you
              would like to book for a service, the admission fee must be paid
              upon entry. The admission fee allows you to have access to the
              entire spa facility.
            </li>
            <li>Friday through Sunday will be charged as weekend price.</li>
            <li>
              Speak to your doctor first if you have a health condition before
              visiting the spa.
            </li>
            <li>
              No flip flops or indoors shoes are allowed inside the facility
              however, if there is a health condition involved, inform staff
              beforehand.
            </li>
            <li>
              All sales are final, no refunds or exchange due to dissatisfaction
              services.
            </li>
          </ul>
        </div>
      </PageSection>
      {/* <hr />
      <PageSection title="GangNam Spa Etiquette">
        <div className="col s12">
          <a href={etiquetteImage}>
            <img
              className="responsive-img"
              src={etiquetteImage}
              alt="spa-etiquette-policy"
            />
          </a>
        </div>
      </PageSection>
      <hr /> */}
    </React.Fragment>
  );
};

export default PolicyPage;
