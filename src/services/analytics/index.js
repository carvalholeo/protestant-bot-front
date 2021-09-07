import useAckee from "use-ackee";
function Analytics() {
  const history = `${document.location.pathname}${document.location.hash}`;
  useAckee(history, {
    domainId: '8cf0d117-2986-4322-8552-b001ee61b3d0',
    server: 'https://analytics.leocarvalho.dev'
  }, {
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: true
  });
}

export default Analytics;
