import { Suspense, lazy } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Loading from '../components/Loading';

const Navbar = lazy(() => import("../components/Navbar"));
const About = lazy(() => import("../pages/About"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ReleaseNotes = lazy(() => import("../pages/ReleaseNotes"));
const BlockManager = lazy(() => import("../pages/BlockManager"));
const Contact = lazy(() => import("../pages/Contact"));
const Error404 = lazy(() => import("../pages/Errors/404"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading content="Carregando itens..." />} >
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
