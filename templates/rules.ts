import { ProxyTypeEnum } from "../types/proxy";
import { RuleTypeEnum, RuleActionEnum } from "../types/rules";

type ProviderBehavior = "classical" | "domain";

const generateProvider = (url: string, behavior: ProviderBehavior = "classical") => {
  return {
    type: "http",
    url,
    interval: 3600,
    behavior,
    format: "text"
  }
};

export const ruleProviders = {
  pcdn: generateProvider("https://ruleset.skk.moe/Clash/non_ip/reject-no-drop.txt"),
  track: generateProvider("https://ruleset.skk.moe/Clash/non_ip/reject-drop.txt"),
  speedtest: generateProvider("https://ruleset.skk.moe/Clash/domainset/speedtest.txt"),
  staticcdn: generateProvider("https://ruleset.skk.moe/Clash/domainset/cdn.txt", "domain"),
  staticcdn2: generateProvider("https://ruleset.skk.moe/Clash/non_ip/cdn.txt"),

  streamHK: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_hk.txt"),
  streamJP: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_jp.txt"),
  streamUS: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_us.txt"),
  streamTW: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_tw.txt"),
  streamKR: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_kr.txt"),
  streamEU: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream_eu.txt"),
  streamGlobal: generateProvider("https://ruleset.skk.moe/Clash/non_ip/stream.txt"),

  streamIPHK: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_hk.txt"),
  streamIPJP: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_jp.txt"),
  streamIPUS: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_us.txt"),
  streamIPTW: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_tw.txt"),
  streamIPKR: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_kr.txt"),
  streamIPEU: generateProvider("https://ruleset.skk.moe/Clash/ip/stream_eu.txt"),
  streamIPGlobal: generateProvider("https://ruleset.skk.moe/Clash/ip/stream.txt"),


  applecdn: generateProvider("https://ruleset.skk.moe/Clash/non_ip/apple_cdn.txt"),
  microsoftcdn: generateProvider("https://ruleset.skk.moe/Clash/non_ip/microsoft_cdn.txt"),
  gameanddriver1: generateProvider("https://ruleset.skk.moe/Clash/domainset/download.txt", "domain"),
  gameanddriver2: generateProvider("https://ruleset.skk.moe/Clash/non_ip/download.txt"),
  appleCN: generateProvider("https://ruleset.skk.moe/Clash/non_ip/apple_cn.txt"),

  appleOtherDomain: generateProvider("https://ruleset.skk.moe/Clash/domainset/apple_other_domain.txt"),
  microsoftOtherDomain: generateProvider("https://ruleset.skk.moe/Clash/domainset/microsoft_other_domain.txt"),

  ai: generateProvider("https://ruleset.skk.moe/Clash/non_ip/ai.txt"),

  overseasOtherDomain: generateProvider("https://ruleset.skk.moe/Clash/non_ip/global.txt"),
  chinaOtherDomain: generateProvider("https://ruleset.skk.moe/Clash/non_ip/domestic.txt"),

  local: generateProvider("https://ruleset.skk.moe/Clash/non_ip/lan.txt"),
  localIP: generateProvider("https://ruleset.skk.moe/Clash/ip/lan.txt"),

  chinaAnycastIP: generateProvider("https://ruleset.skk.moe/Clash/ip/domestic.txt"),
  chinaIP: generateProvider("https://ruleset.skk.moe/Clash/ip/china_ip.txt"),
};

export const rules = [
  `${RuleTypeEnum.RULE_SET},pcdn,${RuleActionEnum.REJECT}`,
  `${RuleTypeEnum.RULE_SET},track,${RuleActionEnum.REJECT_DROP}`,
  `${RuleTypeEnum.RULE_SET},speedtest,${RuleActionEnum.DIRECT}`,

  `${RuleTypeEnum.RULE_SET},staticcdn,${ProxyTypeEnum.StaticCDN}`,
  `${RuleTypeEnum.RULE_SET},staticcdn2,${ProxyTypeEnum.StaticCDN}`,

  `${RuleTypeEnum.RULE_SET},applecdn,${ProxyTypeEnum.AppleCDN}`,
  `${RuleTypeEnum.RULE_SET},microsoftcdn,${ProxyTypeEnum.MicrosoftCDN}`,
  `${RuleTypeEnum.RULE_SET},gameanddriver1,${ProxyTypeEnum.GameAndDriver}`,
  `${RuleTypeEnum.RULE_SET},gameanddriver2,${ProxyTypeEnum.GameAndDriver}`,
  `${RuleTypeEnum.RULE_SET},appleCN,${ProxyTypeEnum.AppleCN}`,

  `${RuleTypeEnum.RULE_SET},streamHK,${ProxyTypeEnum.StreamHK}`,
  `${RuleTypeEnum.RULE_SET},streamJP,${ProxyTypeEnum.StreamJP}`,
  `${RuleTypeEnum.RULE_SET},streamUS,${ProxyTypeEnum.StreamUS}`,
  `${RuleTypeEnum.RULE_SET},streamTW,${ProxyTypeEnum.StreamTW}`,
  `${RuleTypeEnum.RULE_SET},streamKR,${ProxyTypeEnum.StreamKR}`,
  `${RuleTypeEnum.RULE_SET},streamEU,${ProxyTypeEnum.StreamEU}`,
  `${RuleTypeEnum.RULE_SET},streamGlobal,${ProxyTypeEnum.StreamGlobal}`,

  `${RuleTypeEnum.RULE_SET},streamIPHK,${ProxyTypeEnum.StreamHK}`,
  `${RuleTypeEnum.RULE_SET},streamIPJP,${ProxyTypeEnum.StreamJP}`,
  `${RuleTypeEnum.RULE_SET},streamIPUS,${ProxyTypeEnum.StreamUS}`,
  `${RuleTypeEnum.RULE_SET},streamIPTW,${ProxyTypeEnum.StreamTW}`,
  `${RuleTypeEnum.RULE_SET},streamIPKR,${ProxyTypeEnum.StreamKR}`,
  `${RuleTypeEnum.RULE_SET},streamIPEU,${ProxyTypeEnum.StreamEU}`,
  `${RuleTypeEnum.RULE_SET},streamIPGlobal,${ProxyTypeEnum.StreamGlobal}`,

  `${RuleTypeEnum.RULE_SET},appleOtherDomain,${ProxyTypeEnum.AppleOtherDomain}`,
  `${RuleTypeEnum.RULE_SET},microsoftOtherDomain,${ProxyTypeEnum.MicrosoftOtherDomain}`,
  `${RuleTypeEnum.RULE_SET},ai,${ProxyTypeEnum.AI}`,

  `${RuleTypeEnum.RULE_SET},overseasOtherDomain,${ProxyTypeEnum.Overseas}`,
  `${RuleTypeEnum.RULE_SET},chinaOtherDomain,${ProxyTypeEnum.China}`,

  `${RuleTypeEnum.RULE_SET},local,${ProxyTypeEnum.Direct}`,
  `${RuleTypeEnum.RULE_SET},localIP,${ProxyTypeEnum.Direct}`,

  `${RuleTypeEnum.RULE_SET},chinaAnycastIP,${ProxyTypeEnum.China}`,
  `${RuleTypeEnum.RULE_SET},chinaIP,${ProxyTypeEnum.China}`,
  `${RuleTypeEnum.MATCH},${ProxyTypeEnum.Other}`,
];