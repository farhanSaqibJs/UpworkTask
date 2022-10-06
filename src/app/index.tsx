/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import {Login, Plans, Registration} from './pages/Auth/Loadable';
import { Forgot } from './pages/Auth/forgot';
import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - by Raghad"
        defaultTitle="by Raghad"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A by Raghad application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/plans" component={Plans} />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
