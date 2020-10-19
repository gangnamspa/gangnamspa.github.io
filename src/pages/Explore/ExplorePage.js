import React from 'react';
import {Link} from 'react-router-dom';
import {isMobileOnly} from "react-device-detect";
import PageHeader from '../../components/PageHeader';

import sample1 from '../../images/spa11.jpg';
import sample2 from '../../images/spa10.jpg';
import sample3 from '../../images/spa12.jpg';
import sample4 from '../../images/spa13.JPG';

const ImageSection = (props) => {
  const {image} = props;
  return (
    <div className="col s12 l6 no-padding no-line-height">
      <img className="responsive-img" src={image} alt="sample-1"/>
    </div>
  )
}

const TextSection = (props) => {
  const {title, route} = props;
  return (
    <div className="col s12 l6 padding-50">
      <h4 className="under">{title}</h4>
      <p>
        Nullam odio ipsum, maximus ut suscipit id, bibendum id nisi. Nunc sit amet
        sagittis sapien. Donec laoreet iaculis maximus. Nulla viverra, nulla ut pharetra
        tempor, lectus risus faucibus urna, non vestibulum dui dui eget elit. Praesent
        volutpat egestas nisl, scelerisque imperdiet mi sollicitudin id. Suspendisse
        lacinia risus non dolor consectetur faucibus. Ut dapibus sapien sit amet libero
        congue, non ullamcorper est placerat.
      </p>
      <ul className="gns">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
      </ul>
      <Link className="orange waves-effect waves-light btn m-l-5" to={route}>
        Learn More
      </Link>
    </div>
  )
}

const ExplorePage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Explore"/>
      <div className="row no-margin">
        <ImageSection image={sample1}/>
        <TextSection title="Sauna & Therapy" route="/explore/sauna"/>
      </div>
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={sample2}/>}
        <TextSection title="Relaxation Lounge" route="/explore/lounge"/> {!isMobileOnly && <ImageSection image={sample2}/>}
      </div>
      <div className="row no-margin">
        <ImageSection image={sample3}/>
        <TextSection title="Bath House" route="/explore/bath"/>
      </div>
      <div className="row no-margin">
        {isMobileOnly && <ImageSection image={sample4}/>}
        <TextSection title="Dining" route="/explore/dining"/> {!isMobileOnly && <ImageSection image={sample4}/>}
      </div>
    </React.Fragment>
  );
};

export default ExplorePage;