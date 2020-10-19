import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';

const BathPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Bath House"/>
      <PageSection title="Bath House"/>
    </React.Fragment>
  );
};

export default BathPage;