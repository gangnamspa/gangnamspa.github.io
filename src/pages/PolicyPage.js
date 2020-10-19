import React from "react";

import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

import itemsImage from "../images/prohibited_items.png";
import etiquetteImage from "../images/spa_etiquette.png";

const PolicyPage = () => {
  return (
    <React.Fragment>
      <PageHeader content="Policies & Etiquette & Guides" />
      <PageSection title="General Policy">
        <div className="col s12">
          <h5>
            These rules and regulations are in place for the protection and
            convenience of all guests. Violation of these rules and regulations
            may result in ejection from the premises, with or without warning,
            and without refund. NO REFUNDS FOR DISSATISFACTION SERVICES.
          </h5>

          {/* Drugs, Alcohol, and Smoking */}
          <h5 className="under">Drugs, Alcohol, and Smoking</h5>
          <ul className="gns">
            <li>
              We are a smoke, drug, and alcohol-free facility. The following are{" "}
              <b>strictly prohibited</b>:
              <ul>
                <li>Smoking of any kind, inclduing electornic cigarettes.</li>
                <li>Consumption of alcoholic beverages.</li>
              </ul>
            </li>
            <li>
              GangNam Spa reserves the right to refuse the admission of or eject
              those who are under the influence or who have any condition that
              poses a threat to the health or safety of themselves and/or
              others.
            </li>
            <li>
              Guests found to be smoking, of any kind, will be asked to leave
              the facility. This is to ensure a comfortable and pleasant
              environment for all guests.
            </li>
          </ul>

          {/* No Disruptive Cell Phones & Noise */}
          <h5 className="under">No Disruptive Cell Phones & Noise</h5>
          <ul className="gns">
            <li>
              Be respectful of our relaxation areas and saunas. Refrain from
              loud conversations and/or noises.
            </li>
            <li>
              Excessive use of cell phones, including speakers and speaker
              phones will <b>not be tolerated</b>.
            </li>
            <li>No live streaming throughout GangNam Spa Club.</li>
            <li>
              Creating excessive noise or an otherwise disruptive environment
              will result in being asked to leave.
            </li>
          </ul>

          {/* Camera/Photography */}
          <h5 className="under">Camera / Photography</h5>
          <ul className="gns">
            <li>
              Camera, recording devices, and selfie sticks are{" "}
              <b>strictly prohibited</b>.
            </li>
            <li>
              We encourage our guests to take a quick picture for social media,
              but will not tolerate extended photo shoots, which disrupt the
              other guests.
            </li>
            <li>
              Photography or recording, including live-streaming, are never
              allowed in the following areas: Bath Houses, Saunas, and Locker
              Rooms. Guests that do not follow this, will be asked to leave.
              Please respect the privacy of others.
            </li>
          </ul>

          {/* Indoor Clothing Policy & Etiquette */}
          <h5 className="under">Indoor Clothing Policy & Etiquette</h5>
          <ul className="gns">
            <li>
              No shoes allowed inside our facility; sandals or flip flops
              allowed for outdoor areas only.
            </li>
            <li>
              Uniform must be worn in all indoor areas, including the saunas.
            </li>
            <li>Please shower and rinse body before baths.</li>
          </ul>

          {/* Age Guidelines */}
          <h5 className="under">Age Guidelines</h5>
          <ul className="gns">
            <li>
              Guests must be 18 years of age or older to enter GangNam Spa Club
              without an adult.
            </li>
            <li>
              As of January 1st, 2020, customers under the age of 14 will be
              restricted.
            </li>
            <li>
              Minors must have adult supervision <b>at all times.</b>
            </li>
            <li>There must be at least 1 adult for every 4 minors.</li>
          </ul>

          {/* Outside Food & Beverages */}
          <h5 className="under">Outside Food & Beverages</h5>
          <ul className="gns">
            <li>
              Outside food and beverages are not allowed at GangNam Spa Club.
            </li>
          </ul>

          {/* Public Display of Affection */}
          <h5 className="under">Public Display of Affection</h5>
          <ul className="gns">
            <li>
              No overt public displays of affection. We know that love is grand,
              but we ask that you keep the personal displays of affection in
              check out of respect to other guests.
            </li>
          </ul>

          {/* Harassment and Safety */}
          <h5 className="under">Harassment and Safety</h5>
          <ul className="gns">
            <li>
              Possession of dangerous weapons is <b>strictly forbidden</b>.
            </li>
            <li>
              Harassment of GangNam Spa Club staff or guests, in any way, will
              result in immediate expulsion from the premises.
            </li>
          </ul>

          {/* ID Required and Bag Search */}
          <h5 className="under">Harassment and Safety</h5>
          <ul className="gns">
            <li>
              We require a <b>valid ID</b> for entry into GangNam Spa Club,
              regardless of age.
            </li>
            <li>
              GangNam Spa reserves the right to inspect any personal belongings,
              containers, backpack, briefcase, etc. upon entering or leaving our
              premises.
            </li>
          </ul>

          {/* ID Required and Bag Search */}
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
        </div>
      </PageSection>
      <hr />
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
      <hr />
      <PageSection title="GangNam Spa Guides">
        <div className="col s12">
          {/* How to use our Spa & Sauna Key*/}
          <h5 className="under">How to use our Spa & Sauna Key</h5>
          <p>
            GangNam Spa & Sauna keys are designed to be used a locker key as
            well as a credit card. All extra services that are received after
            admission will be saved on this key for payment at checkout.
          </p>
          <ol>
            <li>
              After paying an admission fee, you will be given a locker key and
              uniform. <br />
              Our spa rooms are separated by gender, but the rest of sauna rooms
              are unisex because you will be wearing clothes. <br />
              You must use the spa before going to the sauna rooms.
            </li>
            <li>
              Upon entering the spa locker room, use your key for both your shoe
              locker and clothes locker. <br />
              Leave your clothes and uniform in the locker.
            </li>
            <li>
              Enter the spa, keeping your key around your wrist or ankle. <br />
              You must shower before using the spa pools. <br />
              Recommendation: Use the warm bath for approximately 10 minutes and
              then use the cold bath for about 5 minutes. Next, use the fog
              sauna for about 10 minutes and then use the cold bath for 5
              minutes to relax your body. <br />
              When finished, put on the uniform you were given and enjoy the
              rest of the GangNam Spa facility.
            </li>
            <li>
              Upon finishing the saunas, return to the locker room to take a
              shower.
              <br />
              You may leave any used uniforms or towels in the laundry basket
              and change back into your own clothes. <br />
              Please go to the front desk to return your locker key and pay for
              any services rendered throughout your stay.
            </li>
          </ol>
          {/* Additional info */}
          <h5 className="under">Additional Information</h5>
          <ul className="gns">
            <li>
              Please arrive 30 minutes prior to your appointment to not lose
              your schedule.
            </li>
            <li>We consider Friday through Sunday as weekend.</li>
            <li>
              Please take a shower with soap before using any of the sauna baths
              (pools).
            </li>
            <li>
              When using the sauna rooms, usage time limit will be 20 minutes
              for each time you go in.
            </li>
            <li>No outside food is allowed in our facility.</li>
            <li>
              We also offer other services such as foot massage, nail art, and
              restaurant.
            </li>
            <li>
              After meals, it is recommended that you start off with a light
              sauna such as the Salt Room and then use hotter saunas like the
              BulGaMa Room.
            </li>
            <li>
              There are other rooms available in the facility like the ice room
              and relaxation lounge.
            </li>
            <li>
              Customers checking in between midnight to 4am will be charged $10
              overnight fee.
            </li>
            <li>
              After 24 hours, guests will be charged another admission fee.
            </li>
            <li>
              Once you pay the admission fee and check in, you are not alllowed
              to go out and come back in.
            </li>
            <li>
              Customers under the age of 18 cannot enter without a legal
              guardian.
            </li>
            <li>
              As of January 1st, 2020, customers under the age of 14 will be
              restricted.
            </li>
            <li>No flip flops are allowed inside. (socks are allowed)</li>
            <li>Non-refundable paid admission and service fees.</li>
          </ul>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default PolicyPage;
