import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout1 from '../../components/Layout1';

import './style.less';

export function AuthFlow() {
  return (
    <>
      <Helmet>
        <title>Account</title>
        <meta name="description" content="User Account Services" />
      </Helmet>

      <Layout1>
        <p>AuthFlow</p>
      </Layout1>
    </>
  );
}
