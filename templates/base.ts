const baseConfig = {
  "allow-lan": false,
  "mode": "rule",
  "log-level": "info",
  "ipv6": false,
  "external-controller": "0.0.0.0:9090",
  "secret": "114514",
  "external-ui": "ui",
  "port": 7890,
  "socks-port": 7891,
  "redir-port": 7892,
  "mixed-port": 7893,
  "geodata-mode": true,
  "geodata-loader": "standard",
  "geox-url": {
    "geoip": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
    "geosite": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
    "mmdb": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",
    "asn": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"
  }
};

export default baseConfig;