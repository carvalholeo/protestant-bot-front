import React from "react";
import { Routes, Route } from "react-router-dom";

import Loading from '../components/Loading';

const Navbar = React.lazy(() => import("../components/Navbar"));
const About = React.lazy(() => import("../pages/About"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const ReleaseNotes = React.lazy(() => import("../pages/ReleaseNotes"));
const Error404 = React.lazy(() => import("../pages/Errors/404"));

function Router() {
  return (
    <React.Suspense fallback={<Loading content="Abrindo conteúdo..." />} >
      <Navbar />
      <Routes>
          <Route path="/" element={ <About /> } />
          <Route path="/releasenotes" element={ <ReleaseNotes /> } />
          <Route path="/privacy" element={ <PrivacyPolicy /> } />

          <Route path="*" element={ <Error404 /> } />
      </Routes>
    </React.Suspense>
  );
}

export default Router;
