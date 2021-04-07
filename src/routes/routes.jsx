import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Navbar = lazy(() => import("../components/Navbar/"));
const About = lazy(() => import("../pages/About"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ReleaseNotes = lazy(() => import("../pages/ReleaseNotes"));
const BlockManager = lazy(() => import("../pages/BlockManager"));
const Contact = lazy(() => import("../pages/Contact"));
const Error404 = lazy(() => import("../pages/Errors/404"));

function Routes() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center h4 pt-3">
            <p className="text-center">Carregando itens...</p>
          </div>
        }
      >
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/releasenotes" component={ReleaseNotes} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/block-manager" component={BlockManager} />
          <Route path="/contact" component={Contact} />

          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
