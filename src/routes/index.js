import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useAckee from "use-ackee";

import Loading from '../components/Loading';

const Navbar = React.lazy(() => import("../components/Navbar"));
const About = React.lazy(() => import("../pages/About"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const ReleaseNotes = React.lazy(() => import("../pages/ReleaseNotes"));
const BlockManager = React.lazy(() => import("../pages/BlockManager"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Error404 = React.lazy(() => import("../pages/Errors/404"));

function Router() {
  const { pathname } = useLocation();

  useAckee(pathname, {
    domainId: process.env.REACT_APP_ANALYTICS_ID,
    server: process.env.REACT_APP_ANALYTICS_SERVER
  }, {
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: true
  });

  return (
    <React.Suspense fallback={<Loading content="Abrindo conteúdo..." />} >
      <Navbar />
      <Routes>
          <Route path="/" element={ <About /> } />
          <Route path="/releasenotes" element={ <ReleaseNotes /> } />
          <Route path="/privacy" element={ <PrivacyPolicy /> } />
          <Route path="/block-manager" element={ <BlockManager /> } />
          <Route path="/contact" element={ <Contact /> } />

          <Route element={ <Error404 /> } />
      </Routes>
    </React.Suspense>
  );
}

export default Router;
