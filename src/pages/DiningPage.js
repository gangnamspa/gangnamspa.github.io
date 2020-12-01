import React from "react";

import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

import { DINING_MENU } from "../utils/constants";

import imageChicken from "../images/food/chicken.jpg";
import imageTofuSoup from "../images/food/tofusoup.jpg";
import imageBibimbap from "../images/food/bibimbap.jpg";
import imageBulgogi from "../images/food/bulgogi.jpg";
import imagePorkrice from "../images/food/porkrice.jpg";
import imageJampong from "../images/food/jampong.jpg";
import imagePancake from "../images/food/pancake.jpg";
import imageColdNoodle from "../images/food/coldnoodle.jpg";

const CardImage = (props) => {
  const { imageSrc, imageAlt, cardTitle } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={imageAlt} />
        <span className="card-title">{cardTitle}</span>
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  const { title, korean, price } = props;
  return (
    <li className="collection-item">
      <span className="badge">${price.toFixed(2)}</span>
      {title}
      <br />
      {korean}
    </li>
  );
};

const DiningPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Dining" />
      {/* Soup */}
      <PageSection title="SOUP">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.soup.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage imageAlt="tofu-soup" imageSrc={imageTofuSoup} />
          </div>
        </div>
      </PageSection>

      {/* Vegetables */}
      <PageSection title="VEGETABLES">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.vegetables.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* Rice */}
      <PageSection title="RICE">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.rice.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage imageAlt="bibimbap-img" imageSrc={imageBibimbap} />
            <CardImage imageAlt="pork-rice-img" imageSrc={imagePorkrice} />
          </div>
        </div>
      </PageSection>

      {/* Noodles */}
      <PageSection title="NOODLES">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.noodles.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage imageAlt="jampong-img" imageSrc={imageJampong} />
            <CardImage imageAlt="coldnoodle-img" imageSrc={imageColdNoodle} />
          </div>
        </div>
      </PageSection>

      {/* Meat and Other */}
      <PageSection title="BEEF, PORK, FISH & OTHER">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.meat.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage
              imageAlt="bulgogi"
              imageSrc={imageBulgogi}
              cardTitle="Bulgogi"
            />
          </div>
        </div>
      </PageSection>

      {/* Chicken */}
      <PageSection title="CHICKEN">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.chicken.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage
              imageAlt="chicken-image"
              imageSrc={imageChicken}
              cardTitle="Chicken"
            />
          </div>
        </div>
      </PageSection>

      {/* Fried */}
      <PageSection title="FRIED">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.fried.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <CardImage imageAlt="pancake-img" imageSrc={imagePancake} />
          </div>
        </div>
      </PageSection>

      {/* Beverage / Bar */}
      <PageSection title="BEVERAGE & BAR">
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.beverage.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col s12 m6">
            <ul className="collection">
              {DINING_MENU.bar.map((menu) => {
                const { title, korean, price } = menu;
                return (
                  <MenuItem
                    key={title}
                    title={title}
                    korean={korean}
                    price={price}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default DiningPage;
