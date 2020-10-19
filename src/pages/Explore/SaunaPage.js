import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';

const SaunaPage = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <PageHeader content="Sauna & Therapy"/>
      <PageSection title="Sauna & Therapy"/>
    </React.Fragment>
  );
};

export default SaunaPage;