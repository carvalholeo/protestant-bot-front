import React from "react";
import { Switch } from "react-router-dom";

import Loading from '../components/Loading';

import * as analytics from '../services/analytics';

import Route from './Route';

const Navbar = React.lazy(() => import("../components/Navbar"));
const About = React.lazy(() => import("../pages/About"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const ReleaseNotes = React.lazy(() => import("../pages/ReleaseNotes"));
const BlockManager = React.lazy(() => import("../pages/BlockManager"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Error404 = React.lazy(() => import("../pages/Errors/404"));

function Routes() {
  analytics.Analytics()

  return (
    <React.Suspense fallback={<Loading content="Abrindo conteúdo..." />} >
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/releasenotes" component={ReleaseNotes} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/block-manager" component={BlockManager} />
        <Route path="/contact" component={Contact} />

        <Route component={Error404} />
      </Switch>
    </React.Suspense>
  );
}

export default Routes;
