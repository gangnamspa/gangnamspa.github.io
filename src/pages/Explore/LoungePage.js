import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';

const LoungePage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Relaxation Lounge"/>
      <PageSection title="Relaxation Lounge"/>
    </React.Fragment>
  );
};

export default LoungePage;