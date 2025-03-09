import domainPolicy from "./dns-policy";

const defaultDNS = [
  "223.5.5.5",
  "1.0.0.1",
  "119.29.29.29"
];

const domesticDNS = [
  "https://223.6.6.6/dns-query",
  "https://rubyfish.cn/dns-query",
  "https://dns.pub/dns-query",
  "https://dns.alidns.com/dns-query",
  "1.2.4.8"
];

const foreignDNS = [
  "https://dns.quad9.net/dns-query",
  "tcp://8.8.8.8:53",
  "https://101.101.101.101/dns-query",
  "https://101.102.103.104/dns-query",
  "https://doh.opendns.com/dns-query",
  "https://208.67.222.222/dns-query",
  "https://208.67.220.220/dns-query",
  "https://208.67.222.123/dns-query",
  "https://dns.google/dns-query",
  "https://1.0.0.1/dns-query",
  "https://1.1.1.1/dns-query",
  "https://public.dns.iij.jp/dns-query",
  "tls://dns.google:853",
  "https://9.9.9.9/dns-query",
  "https://doh.apad.pro/dns-query",
  "https://149.112.112.112/dns-query",
  "https://max.rethinkdns.com/dns-query",
  "https://sky.rethinkdns.com/dns-query",
  "https://dns.nextdns.io/dns-query",
];

const dnsConfig = {
  "enable": true,
  "respect-rules": true,
  "prefer-h3": true,
  "listen": "0.0.0.0:8853",
  "ipv6": false,
  "enhanced-mode": "redir-host", // clash verge rev 2.0 以上版本在开启 tun 模式之后，强制设置 enhanced-mode 为 fake-ip 模式，所以下面的 fake ip 配置不可省略
  "fake-ip-range": "198.10.0.1/16",
  "fake-ip-filter": [
    "*.lan",
    "*.danswer.me"
  ],
  "default-nameserver": defaultDNS,
  "nameserver": foreignDNS,
  "proxy-server-nameserver": domesticDNS,
  "nameserver-policy": {
    "geosite:cn,private,apple,onedrive,microsoft@cn,category-games@cn": [
      ...domesticDNS
    ],
    ...domainPolicy
  }
};

export default dnsConfig;