import useAckee from "use-ackee";

const SERVER = process.env.REACT_APP_ANALYTICS_SERVER;
const DOMAIN_ID = process.env.REACT_APP_ANALYTICS_ID;

function Analytics(pathname) {
  useAckee(pathname, {
    domainId: DOMAIN_ID,
    server: SERVER
  }, {
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: true
  });
}

export default Analytics;
