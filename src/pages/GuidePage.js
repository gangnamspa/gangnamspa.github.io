import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

const GuidePage = () => {
  return (
    <React.Fragment>
      <PageHeader content="Guides" />
      <PageSection title="GangNam Spa Guides">
        <div className="col s12">
          {/* How to use our Spa & Sauna Key*/}
          <h4 className="under">How to use our Spa & Sauna Key</h4>
          <p>
            GangNam Spa wristband keys are made to be used as a locker key as
            well as your bill. All services, products, or food that are added to
            the wristband will be saved to the key for payment when checking
            out. We required a valid ID or car keys in exchange for each
            wristband as a security deposit. Once you are checked out, it will
            be given back.
          </p>
          <ol>
            <li>
              After paying the admission fee, you will be given a wristband key
              and uniform.
            </li>
            <li>
              Proceed to go to your designated locker number and use the key on
              the wristband to unlock the shoe locker. You are required to be
              barefoot in the facility.
            </li>
            <li>
              Once shoes are placed in the shoe locker, you will go into the
              gender-separated sauna area. From that point, phones and devices
              are not allowed and must be put away.
            </li>
            <li>
              If you want to use the bathtubs and sauna rooms, leave all
              personal belongings, especially any devices, in your locker. To
              lock the lockers, press any 4 digits of your choice on the digital
              number pad.
            </li>
            <li>
              You <b>must</b> be completely naked and shower before using any
              bathtubs or sauna rooms in the gender-separated area, however, it
              is optional.
            </li>
            <li>
              Once you are finished, wear the provided uniform, and enjoy the
              rest of the facility which includes the specialized
              sauna/relaxation rooms, restaurant, and massage chairs.
            </li>
            <li>
              Upon finishing the saunas, return to the locker room to take a
              shower.
            </li>
            <li>
              Change back into your clothes and leave all used uniforms and
              towels in the laundry cart.
            </li>
            <li>
              Report to the front desk to return your wristband key and pay the
              remaining balance saved to the wristband throughout your stay at
              the spa.
            </li>
          </ol>
          {/* Tips and Suggestions  */}
          <h4 className="under">Tips and Suggestions </h4>
          <ul className="gns">
            <h5>Hot & Cold Tubs</h5>
            <li>
              When using any of the hot bathtubs, it is ideal to keep your
              sessions to last between 15 to 30 minutes.
            </li>
            <li>
              After using the hot bathtubs or sauna rooms, we recommend
              switching to the cold tub to increase blood circulation and
              improve overall health.
            </li>
            <li>
              The recommended time for the cold bath, especially for first-time
              users, should not last longer than 10 minutes.
            </li>
            <li>
              If you are planning to use the bathtubs after a massage/body scrub
              service, please shower with soap and rinse thoroughly before
              entering the water.
            </li>

            <h5>Sauna Rooms</h5>
            <li>
              First-time users are recommended to spend no longer than 5 to 10
              minutes. As you get used to the heat, you can slowly increase the
              time to 20 minutes.
            </li>
            <li>
              The general rule is to time yourself between 15 to 20 minutes. You
              should not exceed 20 minutes in the sauna rooms as you risk
              dehydration the longer you stay.
            </li>
            <li>
              Drink plenty of water to replenish dehydration from sweating.
            </li>
            <li>
              Allow your body to adjust to the heat by using light sauna rooms
              first then to higher temperatures sauna especially after meals.
            </li>
            <li>Clay Room → Salt Room → Bul Ga Ma Room</li>
            <li>
              After using the sauna rooms, allow your body to cool down for at
              least 20 minutes by sitting at room temperature or using the ice
              room.
            </li>
            <li>
              The rotational movement between hot and cold increases skin
              elasticity and tightens pores.
            </li>
            <li>
              The suggested time for the ice room is about 10 to 15 minutes
              although you should work up your way to 15 minutes. This method
              prevents you from exerting your body beyond its limit.
            </li>

            <h5>Services</h5>
            <li>
              You are <b>required</b> to pay the admission fee before booking
              any service appointments{" "}
              <Link to="/price">(check the “Price” tab for information)</Link>,
              however, services are optional.
            </li>
            <li>
              When booking appointments, you are required to arrive at least 30
              minutes prior to your appointment to prevent cancellations or
              service being cut short. This allows you to have time to check-in,
              settle down, and be ready for your appointment.
            </li>
            <li>
              Body scrubs appointment requires you to soak into the hot bathtubs
              for at least 15 minutes prior to the appointment, therefore you{" "}
              <b>must</b> arrive at an appropriate time (at least 30 minutes).
            </li>
            <li>
              Body scrub services will be given by the <b>same</b> gender only,
              not by the opposite gender.
            </li>
          </ul>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default GuidePage;
