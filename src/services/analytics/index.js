import Plausible from "plausible-tracker";

const OPTIONS = {
  domain: "protestantbot.leocarvalho.dev",
  trackLocalhost: false,
  apiHost: process.env.REACT_APP_ANALYTICS_SERVER,
  trackOutboundLinks: true,
};

const plausible = Plausible(OPTIONS);

const WEB_VITALS = {
  CLS: "Cumulative Layout Shift",
  LCP: "Largest Contentful Paint",
  TTFB: "Time to Transfer First Byte",
  FCP: "First Contentful Paint",
  FID: "First Input Delay",
  TTI: "Time to Interactive",
  TBT: "Total Blocking Time",
  INP: "Interaction to next Paint",
};

function trackerFunction() {
  plausible.enableAutoPageviews();
}

export const trackerExecution = trackerFunction();

export function analyticsActions({ name, value }) {
  const event = WEB_VITALS[name];

  console.log(event, value);

  plausible.trackEvent(event, { props: { value } });
}
