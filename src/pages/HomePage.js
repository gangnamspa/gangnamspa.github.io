import React from 'react';

import Parallax from '../components/Parallax';
import Pricing from '../components/Pricing';
import Instagram from '../components/Instagram';
// import Reviews from '../components/Reviews';
import Services from '../components/Services';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <Parallax/>
      <Pricing/>
      <Instagram/> {/* <Reviews/> */}
      <Services/>
    </React.Fragment>
  );
};

export default HomePage;