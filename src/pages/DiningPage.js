import React from 'react';

import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

import {DINING_MENU} from '../utils/constants';

import imageKimbop from '../images/food/kimbop.jpg';
import imageChicken from '../images/food/chicken.jpg';
import imageColdNoodle from '../images/food/coldnoodle.jpg';
import imageShavedIce from '../images/food/shaved_ice.jpg';

const CardImage = (props) => {
  const {imageSrc, imageAlt, cardTitle} = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={imageAlt}/>
        <span className="card-title">{cardTitle}</span>
      </div>
    </div>
  )
}

const MenuItem = (props) => {
  const {title, korean, price} = props;
  return (
    <li className="collection-item">
      {price > 0 && <span className="badge">${price}</span>}
      {title}
      <br/>{korean}</li>
  )
}

const DiningPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Dining"/>
      <PageSection title="Korean">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU
                .korean
                .map((menu) => {
                  const {title, korean, price} = menu;
                  return (<MenuItem key={title} title={title} korean={korean} price={price}/>)
                })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage imageAlt="kimbop" imageSrc={imageKimbop} cardTitle="Korean Rolls"/>
          </div>
        </div>
      </PageSection>
      <PageSection title="Chicken">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU
                .chicken
                .map((menu) => {
                  const {title, korean, price} = menu;
                  return (<MenuItem key={title} title={title} korean={korean} price={price}/>)
                })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage
              imageAlt="chicken"
              imageSrc={imageChicken}
              cardTitle="Soy Garlic Chicken"/>
          </div>
        </div>
      </PageSection>
      <PageSection title="Seasonal">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU
                .seasonal
                .map((menu) => {
                  const {title, korean, price} = menu;
                  return (<MenuItem key={title} title={title} korean={korean} price={price}/>)
                })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage
              imageAlt="cold-noodle"
              imageSrc={imageColdNoodle}
              cardTitle="Cold Noodle"/>
          </div>
        </div>
      </PageSection>
      <PageSection title="Shaved Ice">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU
                .shaved_ice
                .map((menu) => {
                  const {title, korean, price} = menu;
                  return (<MenuItem key={title} title={title} korean={korean} price={price}/>)
                })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage
              imageAlt="shaved-ice"
              imageSrc={imageShavedIce}
              cardTitle="Traditional Shaved Ice"/>
          </div>
        </div>
      </PageSection>
      <PageSection title="Beverage">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU
                .beverage
                .map((menu) => {
                  const {title, korean, price} = menu;
                  return (<MenuItem key={title} title={title} korean={korean} price={price}/>)
                })}
            </ul>
          </div>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default DiningPage;