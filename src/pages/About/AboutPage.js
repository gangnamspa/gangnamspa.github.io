import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import Pricing from '../../components/Pricing';
import Reviews from '../../components/Reviews';

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="About Us"/>
      <PageSection title="GangNam Spa - Who We Are"/>
      <Pricing title="Daily Admission"/>
      <PageSection title="GangNam Spa - Policies"/>
      <Reviews title="Plan to Visit"/>
    </React.Fragment>
  );
};

export default AboutPage;