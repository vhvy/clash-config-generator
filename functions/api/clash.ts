import base from "../../templates/base";
import dns from "../../templates/dns";
import tun from "../../templates/tun";
import { ruleProviders, rules } from "../../templates/rules";
import { proxyGroups } from "../../templates/proxy-groups";
import { reportSubScriptionClient } from "../../services/report";

import yaml from "js-yaml";
import { addPropertyToProxies } from "../../utils/proxies";


export const onRequest: PagesFunction<Env> = async (ctx) => {
  const { env, request } = ctx;

  const urlParams = new URL(request.url).searchParams;
  const secret = urlParams.get("secret");
  const autoRoute = urlParams.get("auto-route") === "1";
  const ipv6Dns = urlParams.get("ipv6-dns") === "1";

  if (!env.CLASH_GW_SECRET || env.CLASH_GW_SECRET !== secret) {
    return new Response(null, {
      status: 204
    });
  }

  base.secret = env.CLASH_API_SECRET;

  if (env.REPORT_URL && env.REPORT_AUTH_KEY) {
    const detail = {
      userAgent: request.headers.get("User-Agent"),
      ip: request.headers.get("CF-Connecting-IP"),
      country: request.headers.get("CF-IPCountry"),
      referer: request.headers.get("Referer"),
      url: request.url
    };
    reportSubScriptionClient(env.REPORT_URL, env.REPORT_AUTH_KEY, detail);
  }

  const response = await fetch(env.CLASH_PROVIDER);
  const subscriptionUserInfo = response.headers.get("subscription-userinfo");

  const clashRemoteConfig = await response.text();

  const subscribe = yaml.load(clashRemoteConfig) as any;

  const proxies = addPropertyToProxies(subscribe.proxies as Proxie[], {
    udp: true,
    tfo: true,
    mptcp: true
  });

  const fullClashConfig = {
    ...base,
    dns: {
      ...dns,
      "ipv6": ipv6Dns
    },
    tun: {
      ...tun,
      "auto-route": autoRoute
    },
    proxies,
    "rule-providers": ruleProviders,
    "proxy-groups": proxyGroups,
    rules,
  };

  const yamlClashConfig = yaml.dump(fullClashConfig).replace(/'''/g, "'");

  const headers = new Headers();

  headers.set("Content-Type", "text/plain; charset=UTF-8");

  if (subscriptionUserInfo) {
    headers.set("subscription-userinfo", subscriptionUserInfo);
  }

  return new Response(yamlClashConfig, {
    headers
  });
}