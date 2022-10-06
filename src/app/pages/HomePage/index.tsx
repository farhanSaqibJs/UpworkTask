import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './style.less';
import Layout1 from "../../components/Layout1";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Raghad application homepage" />
      </Helmet>

      <Layout1>
      </Layout1>
    </>
  );
}
