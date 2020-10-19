import React from 'react';

import service1 from '../images/service2.jpg';
import service2 from '../images/service3.jpg';
import service3 from '../images/nail-shop.jpg';

const Services = () => {
  return (
    <div className="row no-line-height no-margin center-align">
      <div className="col s12 l4 no-padding gns-service">
        <img className="responsive-img" src={service1} alt="sample-1"/>
      </div>
      <div className="col s12 l4 gns-service brown white-text">
        <h5 className="p-t-50">Daily Massages</h5>
        <h6>Massage involves the rubbing and manipulating of muscles, tendons, skin and
          ligaments.
        </h6>
      </div>
      <div className="col s12 l4 no-padding gns-service">
        <img className="responsive-img" src={service2} alt="sample-1"/>
      </div>
      <div className="col s12 l4 gns-service brown white-text">
        <h5 className="p-t-50">Foot Massages</h5>
        <h6>Foot massage has been practiced in many cultures for centuries to promote
          health and well-being.</h6>
      </div>
      <div className="col s12 l4 no-padding gns-service">
        <img className="responsive-img" src={service3} alt="sample-1"/>
      </div>
      <div className="col s12 l4 gns-service brown white-text">
        <h5 className="p-t-50">Nail Art</h5>
        <h6>Relax, as your hands receive the most soothing massage treatment. Your hands
          will feel moisturized, your cuticles clean, and your nails absolutely beautiful.</h6>
      </div>
    </div>
  );
};

export default Services;