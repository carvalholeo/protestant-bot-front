import * as ackeeTracker from 'ackee-tracker';

const SERVER = process.env.REACT_APP_ANALYTICS_SERVER;

const OPTIONS = {
  detailed: true,
  ignoreLocalhost: true,
  ignoreOwnVisits: false
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

const EVENT_ID = {
  CLS: process.env.REACT_APP_EVENT_CLS,
  LCP: process.env.REACT_APP_EVENT_LCP,
  TTFB: process.env.REACT_APP_EVENT_TTFB,
  FCP: process.env.REACT_APP_EVENT_FCP,
  FID: process.env.REACT_APP_EVENT_FID,
  TTI: process.env.REACT_APP_EVENT_TTI,
  TBT: process.env.REACT_APP_EVENT_TBT
}

function trackerFunction() {
  return ackeeTracker.create(SERVER, OPTIONS);
}

export const trackerExecution = trackerFunction();

export function analyticsActions({ name, value }) {
  const action = WEB_VITALS[name];
  const id = EVENT_ID[name];
  const tracker = trackerExecution;

  tracker.action(id, {
    key: action,
    value: value
  });
}
