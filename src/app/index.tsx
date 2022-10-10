/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import {Helmet} from 'react-helmet-async';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {GlobalStyle} from 'styles/global-styles';

import {NotFoundPage} from './components/NotFoundPage/Loadable';
import {useTranslation} from 'react-i18next';
import {Login, Plans, Register} from './pages/Auth/Loadable';

export function App() {
    const {i18n} = useTranslation();
    return (
        <BrowserRouter>
            <Helmet
                titleTemplate="%s - by Raghad"
                defaultTitle="by Raghad"
                htmlAttributes={{lang: i18n.language}}
            >
                <meta name="description" content="A by Raghad application"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>


            </Helmet>

            <Switch>

                <Route path="/" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/plans" component={Plans}/>

                <Route component={NotFoundPage}/>
            </Switch>
            <GlobalStyle/>
        </BrowserRouter>
    );
}
