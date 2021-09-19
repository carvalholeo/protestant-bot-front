import { create } from 'ackee-tracker';

const SERVER = process.env.REACT_APP_ANALYTICS_SERVER;
const DOMAIN_ID = process.env.REACT_APP_ANALYTICS_ID;
const EVENT_ID = process.env.REACT_APP_EVENT_ID;

const OPTIONS = {
  detailed: true,
  ignoreLocalhost: true,
  ignoreOwnVisits: true
}

const WEB_VITALS = {
  CLS: 'Cumulative Layout Shift',
  LCP: 'Largest Contentful Paint',
  TTFB: 'Time to Transfer First Byte',
  FCP: 'First Contentful Paint',
  FID: 'First Input Delay',
  TTI: 'Time to Interactive',
  TBT: 'Total Blocking Time'
};

function Analytics(pathname) {
  const tracker = create(SERVER, OPTIONS);
  tracker.record(DOMAIN_ID, {
    siteLocation: pathname.pathname,
    siteReferrer: document.referrer,
  });
}

function analyticsActions({ name, value }) {
  const action = WEB_VITALS[name];
  const tracker = create(SERVER, OPTIONS);
  tracker.action(EVENT_ID, {
    key: action,
    value: value
  });
}

export { analyticsActions };

export default Analytics;
