

const tunConfig = {
  "enable": true,
  "stack": "system",
  "device": "utun0",
  "auto-route": false,
  "auto-redirect": false,
  "auto-detect-interface": true,
  "mtu": 9000,
  "gso": true,
  "gso-max-size": 65536,
  "udp-timeout": 300,
  "iproute2-table-index": 2022,
  "iproute2-rule-index": 9000,
  "endpoint-independent-nat": false
};

export default tunConfig;