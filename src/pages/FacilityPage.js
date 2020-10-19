import React from "react";
import { isMobileOnly } from "react-device-detect";
import PageHeader from "../components/PageHeader";

import topazImage from "../images/facility/4425.jpg";
import saltroomImage from "../images/facility/4389.jpg";
import bulgamaImage from "../images/facility/4380.jpg";
import iceroomImage from "../images/facility/2034.jpg";
import loungeImage from "../images/facility/1968.jpg";
import footspaImage from "../images/facility/2029.jpg";
import nailshopImage from "../images/nail-shop.jpg";
import restaurantImage from "../images/facility/4419.jpg";

const ImageSection = props => {
  const { image } = props;
  return (
    <div className="col s12 l6 no-padding no-line-height">
      <img className="responsive-img" src={image} alt="facilities" />
    </div>
  );
};

const TextSection = props => {
  const { title, children } = props;
  return (
    <div className="col s12 l6 padding-50">
      <h4 className="under">{title}</h4>
      {children}
    </div>
  );
};

const FacilityPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Facilities"></PageHeader>

      {/* Topaz Cave */}
      <div className="row no-margin">
        <ImageSection image={topazImage} />
        <TextSection title="Topaz Cave">
          <h6>
            Designed as a private place to relax and made of Topaz solid
            solution of stones.
            <br />
            Its components are magnesium and calcium. They are composed of
            fiber, hair and fine aggregate. It contains minerals that are
            extremely necessary in human body, namely calcium and magnesium. So
            Topaz is hypertension. It is also known as a natural food for people
            suffering from diabetes, cardiovascular disease, heart disease and
            cardiac disorders. Especially since the woman's body is deprived of
            calcium, iron and magnesium, the use of jade prevents osteoporosis.
            And Topaz promotes brain activity and helps the examinee to
            concentrate on the concentration of consciousness by progressing the
            integration of neutral circuits. (Improving memory and mental
            concentration, relieving stress)
          </h6>
        </TextSection>
      </div>

      {/* Himalayan Salt Room */}
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={saltroomImage} />}
        <TextSection title="Himalayan Salt Room">
          <h6>
            This room is made of 350 million year old natural salt base rocks.
            Salt is a natural preservative and the heat and humidity from the
            sauna allows for the skin to be exposed the healing properties of
            the salt. These salt rocks contain minerals such as Natrium(Sodium),
            Calcium, Iron, and Zinc.
          </h6>
        </TextSection>
        {!isMobileOnly && <ImageSection image={saltroomImage} />}
      </div>

      {/* Signature Bul Ga Ma for High and Low Temperature */}
      <div className="row no-margin">
        <ImageSection image={bulgamaImage} />
        <TextSection title="Signature Bul Ga Ma for High and Low Temperature">
          <h6>
            The Bul ga ma, made of powerfully hot room eases muscle tension,
            helps with arthritis, and is known to lower the cerebral
            temperature. The high temperature sits at an impressive 231 degrees
            for intense thermotherapy and low temperature sets at 80 -107
            degrees to slowly start to sweat.
          </h6>
          <h6>
            Modeled after the traditional Korean ultra heated sauna, where
            special yellow archer fomentation stones and Oak wood are
            superheated in a fire kiln, this room releases natural elements that
            penetrate deep into your pores and results in immediate
            detoxification and strengthening of the immune system. Calories are
            burned quickly from the stimulation of white blood cells and
            antibody production.
          </h6>
        </TextSection>
      </div>

      {/* Igloo Ice Room */}
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={iceroomImage} />}
        <TextSection title="Igloo Ice Room">
          <h6>
            The cold works to close the pores, smooth skin, enhance skin
            elasticity. Ice will make fat burning process more active and help
            strengthen the connective tissue in the abdomen. The rotational
            movement between the hot and cold sauna helps to increase skin
            elasticity, improve blood circulation, activate body’s immunity,
            remove facial wrinkles, create a sense of relaxation.
          </h6>
          <h6>
            Igloo room is considered as perfect therapy for neuralgia, back
            pain, shoulder pain by releasing muscles tension.
          </h6>
          <ul className="gns">
            <li>Lower the body temperature, shrink the loosen pores</li>
            <li>Make wrinkling and rough skin more elastic</li>
          </ul>
        </TextSection>
        {!isMobileOnly && <ImageSection image={iceroomImage} />}
      </div>

      {/* Relaxation Lounge */}
      <div className="row no-margin">
        <ImageSection image={loungeImage} />
        <TextSection title="Relaxation Lounge">
          <h6>
            In Korea, the sauna at Jjim Jil Bang rooms is a traditional culture.
            Everyone, when go to the Jjim Jil Bang, leave their ambition and
            sorrow behind, all are equal, having the same goal that is to find
            relaxation and rest. Friends, families come here as an opportunity
            to connect and develop friendship, family sentiment.
          </h6>
          <h6>
            Especially, the Spa offers a public relaxing lounge extremely
            spacious that you and your family, your friends can sit and drink
            fermented Korean rice water, eat baked eggs and share everyday
            stories, joys and sorrows together. Not only that, here has TV for
            you to enjoy movies from the action and romance to adventure film.
          </h6>
        </TextSection>
      </div>

      {/* Hot & Cold Foot Spa */}
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={footspaImage} />}
        <TextSection title="Hot & Cold Foot Spa">
          <h6>
            When you have the flu, cold feet or can not sleep, the combination
            therapy bath of hot water and cold water for the feet is essential.
            The hot water will push blood to the body’s weak pulse, cold water,
            then squeeze the blood circulation of the body. The exchange between
            the hot and cold water will massage your feet while stimulate the
            immune system and helps to relax the nerve endings in the body.
          </h6>
        </TextSection>
        {!isMobileOnly && <ImageSection image={footspaImage} />}
      </div>

      {/* Nail Shop */}
      <div className="row no-margin">
        <ImageSection image={nailshopImage} />
        <TextSection title="Nail Shop">
          <h6>
            Beauty Nails Spa that promotes comfort, beauty, well-being, and
            health to our first-class customers. We are committed to providing
            you the latest advances in beauty care. We use ONLY the most trusted
            brands in the beauty industry. Our world-class products, services,
            and top technologies will make you feel great and make you look
            best.
          </h6>
        </TextSection>
      </div>

      {/* Restaurant */}
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={restaurantImage} />}
        <TextSection title="Restaurant">
          <h6>
            Gangnam Spa offers a variety of foods, snack and beverage options.
            Enjoy delicious foods made by our master chef.
          </h6>
        </TextSection>
        {!isMobileOnly && <ImageSection image={restaurantImage} />}
      </div>
    </React.Fragment>
  );
};

export default FacilityPage;
