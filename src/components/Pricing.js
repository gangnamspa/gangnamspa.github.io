import React from 'react';

import {PRICE} from '../utils/constants';

const Pricing = (props) => {
  const title = props.title || 'Pricing & General Policies';
  return (
    <div className="bg-light p-t-50 p-b-40">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5 className="text-line">
              {title}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l7">
            <div className="row">
              <div className="col s12 l6">
                <div className="card-panel brown white-text center-align no-padding">
                  <div className="p-t-50 p-b-50">
                    <h5>
                      WEEKDAYS
                    </h5>
                    <h1 className="m-t-10 under">
                      {PRICE.DAILY}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card-panel brown white-text center-align no-padding">
                  <div className="p-t-50 p-b-50">
                    <h5>
                      WEEKENDS & HOLIDAYS
                    </h5>
                    <h1 className="m-t-10 under">
                      {PRICE.WEEKENDS}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 l5">
            <ul className="gns">
              <li>No drugs, alcohol, and smoking</li>
              <li>No disruptive cell phones and noise</li>
              <li>No camera and photography</li>
              <li>No shoes inside the facility</li>
              <li>No outside food and beverages</li>
              <li>Must have a valid ID for entry</li>
              <li>Must be 18 or older to enter without supervision</li>
            </ul>
            <div className="center-align">
              <a href="/policy" className="brown waves-effect waves-light btn m-t-5">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;