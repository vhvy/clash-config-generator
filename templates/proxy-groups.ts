import { ProxyTypeEnum } from "../types/proxy";

export const proxyGroups = [
  {
    name: ProxyTypeEnum.Overseas,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.Other,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.AI,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StaticCDN,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.China,
    type: "select",
    proxies: [
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.GameAndDriver,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.AppleCDN,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.MicrosoftCDN,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.AppleCN,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.AppleOtherService,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.MicrosoftOtherService,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Direct,
      ProxyTypeEnum.Overseas,
    ]
  },
  {
    name: ProxyTypeEnum.CloudflareCDN,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamHK,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamJP,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamUS,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamTW,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamKR,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamEU,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.StreamGlobal,
    type: "select",
    "include-all-proxies": true,
    proxies: [
      ProxyTypeEnum.Overseas,
      ProxyTypeEnum.Direct,
    ]
  },
  {
    name: ProxyTypeEnum.Direct,
    type: "select",
    proxies: [
      "DIRECT"
    ]
  }
];